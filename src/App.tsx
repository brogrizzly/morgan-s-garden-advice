import './App.css'

const services = [
  {
    name: 'Quick Garden Read',
    price: '$25',
    description: 'A practical note on what to plant, move, or cut back in your space.',
  },
  {
    name: 'Flower Bed Plan',
    price: '$50',
    description: 'A fuller plan with plant ideas, spacing, and simple next steps.',
  },
]

const steps = [
  {
    title: 'Send photos',
    text: 'Share a few clear pictures of the bed, border, or patch of dirt you want to work with.',
  },
  {
    title: 'Tell me what you want',
    text: 'Mention the conditions you notice most: shade, soggy soil, hungry deer, or a sunny slope.',
  },
  {
    title: 'Receive grounded advice',
    text: 'I reply with practical suggestions for plants, timing, and care that suit your place.',
  },
]

const galleryItems = [
  {
    title: 'A pollinator border',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'A cottage-style path',
    image:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'A quiet corner garden',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#hero">
          Morgan S. Garden Advice
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Practical garden advice for real growing conditions</p>
            <h1>Morgan S. Garden Advice</h1>
            <p className="lead">
              Grow something that belongs where you live. Send photos of your garden, flower bed,
              or neglected patch of dirt and receive practical planting advice based on your
              actual growing conditions.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">
                Get Garden Advice
              </a>
              <a className="button button-secondary" href="#gallery">
                View Garden Gallery
              </a>
            </div>
            <ul className="hero-notes">
              <li>Photo-based guidance</li>
              <li>Fixed-fee consulting</li>
              <li>Rooted in everyday garden experience</li>
            </ul>
          </div>

          <div className="hero-card" aria-label="Garden inspiration image">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
              alt="A bright cottage garden bed in bloom"
            />
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Morgan</p>
            <h2>Thoughtful guidance for the gardens people actually live with.</h2>
          </div>
          <div className="about-grid">
            <p>
              Morgan offers calm, useful advice for homeowners who want to make better planting
              choices without turning their yard into a project. The focus is on what works in
              your climate, soil, and light, with recommendations that feel realistic and lasting.
            </p>
            <p>
              This is not landscaping design from a distance and not a generic AI plan. It is small,
              friendly consulting grounded in hands-on gardening experience.
            </p>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>Three simple steps to helpful advice.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="info-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Simple, fixed-fee guidance.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-price">{service.price}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Garden Gallery</p>
            <h2>Inspiration from gardens with character.</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Ready for practical advice?</h2>
          </div>
          <div className="contact-box">
            <p>
              Email Morgan to ask about a consultation, share your photos, and learn whether a
              quick read or a fuller flower bed plan fits your needs.
            </p>
            <a className="button button-primary" href="mailto:hello@morgansgardenadvice.com">
              hello@morgansgardenadvice.com
            </a>
          </div>
        </section>

        <section className="section disclaimer-section">
          <p className="disclaimer">
            <strong>Advice disclaimer:</strong> This service offers practical gardening guidance for
            educational and planning purposes. It is not a substitute for professional horticultural
            diagnosis or a guarantee of plant performance.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
