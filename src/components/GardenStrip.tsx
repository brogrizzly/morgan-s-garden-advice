import { todaysGarden } from '../data/gardenJournal'

export function GardenStrip() {
  return (
    <section className="garden-strip-section" aria-labelledby="todays-garden-title">
      <div className="garden-strip-heading">
        <div>
          <p className="eyebrow">Today&apos;s Garden</p>
          <h2 id="todays-garden-title">One living strip, photographed over time.</h2>
        </div>
        <p className="garden-date">{todaysGarden.date}</p>
      </div>

      <div className="garden-strip" aria-label="Five photographs from today's garden">
        <figure>
          <img src={todaysGarden.stripImage} alt={todaysGarden.alt} />
          <figcaption>Five frames / one day / real garden</figcaption>
        </figure>
      </div>

      <div className="garden-strip-copy">
        <p>{todaysGarden.note}</p>
      </div>
    </section>
  )
}
