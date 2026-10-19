import { latestGarden } from '../data/gardenJournal'

export function GardenStrip() {
  return (
    <section className="garden-strip-section" aria-labelledby="garden-journal-title">
      <div className="garden-strip-heading">
        <div>
          <p className="eyebrow">Garden Journal</p>
          <h2 id="garden-journal-title">One living strip, photographed over time.</h2>
        </div>
        <time className="garden-date" dateTime={latestGarden.date}>{latestGarden.displayDate}</time>
      </div>

      <div
        className="garden-strip"
        role="group"
        aria-label={`Five garden photographs from ${latestGarden.displayDate}`}
        tabIndex={0}
      >
        {latestGarden.photos.map((photo) => (
          <figure key={photo.file}>
            <img
              src={`${import.meta.env.BASE_URL}garden/${latestGarden.date}/${photo.file}`}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="garden-strip-copy">
        <p>{latestGarden.note}</p>
      </div>
    </section>
  )
}
