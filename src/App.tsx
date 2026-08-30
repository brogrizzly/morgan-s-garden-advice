import './App.css'
import { GardenStrip } from './components/GardenStrip'

const steps = [
  {
    title: 'Send five pictures',
    text: 'One wide shot. One from the opposite side. One close view of the soil. One close view of the main problem or existing plants. One view showing shade, fences, trees, or exposure. Show the real patch. Do not clean it up for the photograph.',
  },
  {
    title: 'Fill out the garden chart',
    text: 'A short garden chart, not a landscape-design interview. Give me USDA hardiness zone, sunlight, soil behavior, drainage, wind, watering, patch size, animals or wildlife, desired look, colors you like, colors you do not, maintenance tolerance, and seed budget.',
  },
  {
    title: 'Receive five recommendations',
    text: 'You get five written seed recommendations, the reason for each, a basic sowing window, placement notes, and one caution. That is the service. I am not designing Monet’s garden for everybody.',
  },
]

const services = [
  {
    title: 'Five-Picture Garden Read',
    price: '$25',
    details: ['One patch of ground', 'Five photographs', 'Five seed recommendations', 'Short explanation for each', 'Basic timing and placement notes'],
  },
  {
    title: 'Garden Bed Field Plan',
    price: '$50',
    details: ['One defined bed or small garden area', 'Five primary seed recommendations', 'Arrangement notes', 'Color and bloom-sequence notes', 'A little more detail, not a complete landscape plan'],
  },
]

const intakeFields = [
  'First name or preferred name',
  'Email address',
  'USDA hardiness zone',
  'Estimated sunlight',
  'Soil behavior',
  'Drainage',
  'Wind',
  'Watering method',
  'Animals or wildlife',
  'Approximate patch size',
  'Desired look',
  'Colors liked',
  'Colors disliked',
  'Maintenance tolerance',
  'Seed budget',
]

const galleryItems = [
  {
    title: 'Morning border after rain',
    alt: 'A damp garden border in early light with soft pink and white flowers',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Foxgloves doing whatever they want',
    alt: 'Tall foxgloves rising in a mixed border near a fence line',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pollinator traffic',
    alt: 'A garden bed with bees moving through purple and yellow flowers',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
]

const creativeInfluences = [
  {
    name: 'KRS-One / Boogie Down Productions',
    href: 'https://www.krs-one.com/about',
    text: 'Knowledge as practice: teach it, question it, and keep human beings in command of what they learn and decide.',
  },
  {
    name: 'Zack de la Rocha / Rage Against the Machine',
    href: 'https://www.ratm.com/',
    text: 'Music as public argument: examine institutional power, preserve historical memory, and ask what a system actually does to people.',
  },
  {
    name: 'Tom Morello',
    href: 'https://www.tommorello.com/',
    text: 'Treat constraints, noise, switches, feedback, and familiar tools as raw material for new instruments that humans can still understand and control.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#hero">
          <span className="brand-block">Morgan S. Company</span>
          <span className="brand-subtitle">Software · Seeds · Systems</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#how-this-works">How This Works</a>
          <a href="#services">Services</a>
          <a href="#garden-pictures">Garden Pictures</a>
          <a href="#influences">Influences</a>
          <a href="#boundaries">Boundaries</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Morgan S. Company / Garden Picture Advice</p>
            <h1>Five pictures in.<br />Five seed packets out.</h1>
            <p className="lead">
              Send five clear pictures of one garden bed, border, planter, or troublesome patch.
            </p>
            <p className="supporting-line">
              I will look at what is actually there, read the conditions you give me, and send back
              five seed recommendations for you to consider, buy, and plant yourself.
            </p>
            <p className="supporting-line secondary">
              This is not a full garden design. It is five useful decisions for one patch of ground.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">Send Five Pictures</a>
              <a className="button button-secondary" href="#how-this-works">How This Works</a>
            </div>
            <div className="field-note-strip" aria-label="Service summary">
              <span>INPUT / FIVE PICTURES</span>
              <span>REVIEW / ONE PATCH</span>
              <span>OUTPUT / FIVE RECOMMENDATIONS</span>
              <span>PLANTING / YOUR JOB</span>
              <span>GUARANTEE / NONE</span>
            </div>
          </div>

          <div className="hero-card" aria-label="Garden inspiration image">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
              alt="A cottage garden border in summer light with soft flowers and clipped greens"
            />
          </div>
        </section>

        <GardenStrip />

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Gardening is harder than it looks.</h2>
          </div>
          <div className="about-grid">
            <p>Sun shifts. Soil changes across the same yard. Slugs, deer, wind, rain, dogs, goats, and ordinary human forgetfulness all get a vote.</p>
            <p>I have moved plants that should have stayed put. I have waited years for things that never bloomed. I have also watched an ugly patch turn into the best part of the yard.</p>
            <p>That is the level of certainty available here. I will give you five recommendations and explain my reasoning. You decide what to buy, what to plant, and whether any of it makes sense for your garden.</p>
          </div>
          <div className="note-box">
            <p>Not every recommendation means buying more. Sometimes the right answer is to move something, divide something, wait until fall, stop watering it so much, remove one plant, or plant nothing yet.</p>
          </div>
        </section>

        <section className="section" id="how-this-works">
          <div className="section-heading">
            <p className="eyebrow">How This Works</p>
            <h2>Three steps. One patch at a time.</h2>
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
          <div className="privacy-note">
            <p className="privacy-note-title">Photograph privacy</p>
            <p>Before sending pictures, check the background for house numbers, license plates, faces, mail, documents, school names, neighboring homes, or anything else you do not want included. Photographs should focus on the garden patch only.</p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>The work is simple. The decisions are not.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-price">{service.price}</div>
                <h3>{service.title}</h3>
                <ul>
                  {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="section-intro">Seeds are not included. You choose, purchase, plant, and maintain everything yourself.</p>
        </section>

        <section className="section" id="seed-packets">
          <div className="section-heading">
            <p className="eyebrow">Seed Packets</p>
            <h2>The five packets are personalized written recommendations.</h2>
          </div>
          <p className="section-intro">Physical seed packets are not included. Each recommendation is a written note with a reason, a basic sowing window, placement notes, and one caution.</p>
          <div className="packet-grid">
            <article className="packet-card">
              <p className="packet-label">SEED PACKET / 01</p>
              <h3>Recommendation</h3><p>[Seed or seed mix]</p>
              <h3>Why</h3><p>[Why I think it belongs in this patch]</p>
              <h3>Conditions</h3><p>[Light, moisture, and soil notes]</p>
              <h3>Sowing window</h3><p>[When to consider planting]</p>
              <h3>Placement</h3><p>[Where or how to group it]</p>
              <h3>Watch for</h3><p>[One limitation, risk, or maintenance note]</p>
            </article>
            <div className="packet-format-list">
              <div className="packet-format-item">RECOMMENDATION</div>
              <div className="packet-format-item">WHY</div>
              <div className="packet-format-item">CONDITIONS</div>
              <div className="packet-format-item">SOWING WINDOW</div>
              <div className="packet-format-item">PLACEMENT</div>
              <div className="packet-format-item">WATCH FOR</div>
            </div>
          </div>
        </section>

        <section className="section" id="garden-pictures">
          <div className="section-heading">
            <p className="eyebrow">Garden Pictures</p>
            <h2>Real gardens / not renderings.</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="boundaries">
          <div className="section-heading">
            <p className="eyebrow">Boundaries</p>
            <h2>What five pictures cannot tell me.</h2>
          </div>
          <div className="boundary-list">
            <article><h3>Plant ID</h3><p>I may not be able to identify an existing plant from a photograph. I will not guess just to sound confident.</p></article>
            <article><h3>Plant health</h3><p>Pictures cannot reliably prove disease, pests, soil chemistry, root damage, chemical exposure, or drainage below the surface.</p></article>
            <article><h3>People and animals</h3><p>I do not certify that a plant is safe for children, dogs, cats, goats, livestock, or wildlife. Toxicity and safety must be checked independently through authoritative sources.</p></article>
            <article><h3>Results</h3><p>Weather, soil, watering, timing, wildlife, maintenance, and chance all affect what happens next.</p></article>
            <article><h3>Responsibility</h3><p>You choose the seeds. You buy them. You plant them. You care for them. Final decisions remain yours.</p></article>
          </div>
        </section>

        <section className="section" id="influences">
          <div className="section-heading">
            <p className="eyebrow">G4LO Creative Lineage</p>
            <h2>Code has influences outside code.</h2>
          </div>
          <p className="section-intro">
            Politically conscious hip-hop and Rage Against the Machine are major influences on
            G4LO's language, posture, and insistence that systems expose rather than conceal power.
            KRS-One, Zack de la Rocha, Rage Against the Machine, and Tom Morello are direct
            inspirations for G4LO. This is not a sterile bibliography. I fucking love these artists
            and their work.
          </p>
          <div className="boundary-list">
            {creativeInfluences.map((influence) => (
              <article key={influence.name}>
                <h3>
                  <a href={influence.href} target="_blank" rel="noreferrer">
                    {influence.name}
                  </a>
                </h3>
                <p>{influence.text}</p>
              </article>
            ))}
          </div>
          <div className="note-box">
            <p>
              These are direct creative inspirations, and the links send people directly toward their
              work. They are not formally affiliated with G4LO; I am giving loud, honest credit to
              people whose work I love. This is a living list.
            </p>
          </div>
        </section>

        <section className="section" id="ai-tools">
          <div className="section-heading">
            <p className="eyebrow">How I Review the Pictures</p>
            <h2>I use experience, reference material, and tools. AI does not get the final say.</h2>
          </div>
          <div className="ai-box">
            <p>I use gardening experience, reference material, plant-identification tools, and AI-assisted research to work faster and compare possibilities.</p>
            <p>AI does not get the final say. I review the recommendations before they leave my desk.</p>
            <p>Your pictures and notes are used to prepare the advice you asked for. Morgan S. Company does not sell customer information, build advertising profiles, or use submissions for marketing.</p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Show me one patch of ground.</h2>
          </div>
          <div className="contact-box">
            <p>Five pictures. A short garden chart. Five recommendations back.</p>
            <div className="intake-card">
              <h3>Minimum intake</h3>
              <p>Do not send your address. Your USDA hardiness zone and the conditions visible in the photographs are enough for this service.</p>
              <ul className="intake-list">
                {intakeFields.map((field) => <li key={field}>{field}</li>)}
              </ul>
            </div>
            <div className="note-box muted"><p>Submission system is being prepared.</p></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Morgan S. Company</strong>
          <p>Software · Seeds · Systems</p>
        </div>
        <div className="footer-links">
          <a href="#hero">Built with G4LO</a>
          <a href="#ai-tools">Tool acknowledgments</a>
          <a href="https://www.youtube.com/user/RATMVEVO" target="_blank" rel="noreferrer">
            Cleaning soundtrack / RATM
          </a>
        </div>
        <p className="acknowledgment">
          With sincere gratitude to the open-source software and AI communities, especially the people who share code, research, documentation, and models such as Qwen. ChatGPT and Codex from OpenAI, Google AI tools, Visual Studio Code, GitHub, and open-source models have been valuable development tools. Final design, verification, and stewardship remain the responsibility of Morgan S. Company.
        </p>
      </footer>
    </div>
  )
}

export default App
