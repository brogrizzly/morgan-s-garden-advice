import { expect, test } from '@playwright/test'

test('the dated garden journal displays five decodable original photographs', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })

  const journal = page.getByRole('region', {
    name: 'One living strip, photographed over time.',
  })
  const photographs = journal.getByRole('img')
  for (const photograph of await photographs.all()) {
    await photograph.scrollIntoViewIfNeeded()
    await expect.poll(() => photograph.evaluate((image: HTMLImageElement) => (
      image.complete && image.naturalWidth > 0
    ))).toBe(true)
    await expect(photograph).toHaveAttribute('src', /\/garden\/2026-10-17\/IMG_\d+\.jpeg$/)
    await expect(photograph).toHaveAttribute('alt', /\S+/)
  }
  await expect(photographs).toHaveCount(5)
  await expect(journal.getByText('Garden Journal', { exact: true })).toBeVisible()
  await expect(journal.locator('time')).toHaveAttribute('datetime', '2026-10-17')
  await expect(journal.locator('time')).toHaveText('October 17, 2026')
})

test('navigation targets exist and intake details explain the available service', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })

  for (const link of await page.getByRole('link').all()) {
    const href = await link.getAttribute('href')
    if (href?.startsWith('#')) {
      await expect(page.locator(href)).toHaveCount(1)
    }
  }

  await page.getByRole('link', { name: 'View Intake Details' }).click()
  await expect(page).toHaveURL(/#contact$/)
  await expect(page.getByRole('heading', { name: 'Minimum intake' })).toBeVisible()
  await expect(page.getByText('Submission system is being prepared.', { exact: true })).toBeVisible()
})

test('the primary action keeps readable contrast while hovered and keyboard focused', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const action = page.locator('.button-primary')

  for (const state of ['rest', 'hover', 'focus'] as const) {
    if (state === 'hover') await action.hover()
    if (state === 'focus') {
      await page.mouse.move(0, 0)
      await page.keyboard.press('Tab')
      await action.focus()
    }

    const ratio = await action.evaluate((element) => {
      const style = getComputedStyle(element)
      const luminance = (color: string) => {
        const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map((channel) => {
          const value = channel / 255
          return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
        })
        return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
      }
      const foreground = luminance(style.color)
      const background = luminance(style.backgroundColor)
      return (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05)
    })
    expect(ratio, `primary action contrast in ${state} state`).toBeGreaterThanOrEqual(4.5)
  }
})

test('the journal scrolls within the page at a narrow mobile width', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 })
  await page.goto('/', { waitUntil: 'domcontentloaded' })

  const journal = page.getByRole('region', {
    name: 'One living strip, photographed over time.',
  })
  await journal.scrollIntoViewIfNeeded()
  await expect.poll(() => page.evaluate(() => (
    document.documentElement.scrollWidth <= window.innerWidth
  ))).toBe(true)
  await journal.getByRole('img').last().scrollIntoViewIfNeeded()
  await expect(journal.getByRole('img').last()).toBeInViewport()
})
