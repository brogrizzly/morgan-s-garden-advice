import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const groups = await Promise.all(entries.map((entry) => {
    const filename = path.join(directory, entry.name)
    return entry.isDirectory() ? filesUnder(filename) : [filename]
  }))
  return groups.flat()
}

test('relative documentation links resolve to repository files', async () => {
  const documents = [path.join(root, 'README.md'), ...(await filesUnder(path.join(root, 'docs')))
    .filter((filename) => filename.endsWith('.md'))]
  const errors = []

  for (const filename of documents) {
    const markdown = (await readFile(filename, 'utf8')).replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '')
    for (const match of markdown.matchAll(/!?\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)/g)) {
      const target = match[1].replace(/^<|>$/g, '')
      if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(target)) continue
      const pathname = decodeURIComponent(target.split(/[?#]/)[0])
      if (!pathname) continue
      const resolved = path.resolve(path.dirname(filename), pathname)
      const label = `${path.relative(root, filename)}: ${target}`
      if (!resolved.startsWith(root)) {
        errors.push(`${label} leaves the repository`)
        continue
      }
      try {
        await stat(resolved)
      } catch {
        errors.push(`${label} does not exist`)
      }
    }
  }

  assert.deepEqual(errors, [])
})

test('research JSON, photograph manifests, and embedded JSON data parse', async () => {
  const filenames = [
    ...await filesUnder(path.join(root, 'docs')),
    ...await filesUnder(path.join(root, 'public/garden')),
  ].filter((filename) => filename.endsWith('.json'))
  assert.ok(filenames.length > 0, 'No research JSON or manifests were found')
  for (const filename of filenames) {
    const content = await readFile(filename, 'utf8')
    assert.doesNotThrow(() => JSON.parse(content), path.relative(root, filename))
  }

  const documents = (await filesUnder(path.join(root, 'docs')))
    .filter((filename) => filename.endsWith('.md'))
  for (const filename of documents) {
    const markdown = await readFile(filename, 'utf8')
    for (const match of markdown.matchAll(/^```json\s*\n([\s\S]*?)^```\s*$/gm)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `${path.relative(root, filename)}: embedded JSON`)
    }
  }
})

test('original photographs match manifest hashes, sizes, and inventory', async () => {
  const manifests = (await filesUnder(path.join(root, 'public/garden')))
    .filter((filename) => path.basename(filename) === 'manifest.json')
  assert.ok(manifests.length > 0, 'No photograph manifest was found')

  for (const filename of manifests) {
    const directory = path.dirname(filename)
    const manifest = JSON.parse(await readFile(filename, 'utf8'))
    assert.ok(Array.isArray(manifest) && manifest.length > 0, `${filename}: empty manifest`)
    const names = manifest.map((entry) => entry.file)
    assert.equal(new Set(names).size, names.length, `${filename}: duplicate filenames`)
    const originals = (await readdir(directory)).filter((name) => /\.(?:jpe?g|png|webp)$/i.test(name))
    assert.deepEqual([...names].sort(), originals.sort(), `${filename}: unlisted or missing originals`)

    for (const entry of manifest) {
      assert.equal(path.basename(entry.file), entry.file, `${filename}: unsafe filename`)
      const image = await readFile(path.join(directory, entry.file))
      assert.equal(image.length, entry.bytes, `${entry.file}: byte count differs`)
      assert.equal(createHash('sha256').update(image).digest('hex'), entry.sha256, `${entry.file}: hash differs`)
    }
  }
})
