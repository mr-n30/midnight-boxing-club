import { useEffect, useRef, useState } from 'react'

const focusAreas = [
  {
    title: 'Boxing Fundamentals',
    description:
      'Stance, rhythm, straight punches, controlled combinations, and the habits that create clean mechanics.',
  },
  {
    title: 'Footwork & Movement',
    description:
      'Balance, pivots, distance management, and efficient movement that feels composed rather than rushed.',
  },
  {
    title: 'Defensive Mechanics',
    description:
      'Guard awareness, slips, rolls, framing, and learning how to stay calm under pressure.',
  },
  {
    title: 'Conditioning',
    description:
      'Structured rounds and athletic work that build engine, posture, and usable endurance.',
  },
  {
    title: 'Beginner-Friendly Coaching',
    description:
      'Clear instruction, patient pacing, and a practical approach for people who are new to boxing.',
  },
  {
    title: 'Discipline & Confidence',
    description:
      'Training that supports consistency, sharper focus, and a stronger sense of physical confidence.',
  },
]

const coachingFeatures = [
  {
    title: '30 min conditioning',
    description:
      'Interval work, core control, and strength-based drills that support stamina and posture.',
  },
  {
    title: '30 min boxing fundamentals',
    description:
      'Stance, straight punches, basic combinations, and timing taught with clean, repeatable detail.',
  },
  {
    title: 'Agility, speed & movement',
    description:
      'Ladder patterns, cone reactions, shuffle work, and directional drills inspired by football and basketball training.',
  },
  {
    title: 'Strength & athletic base',
    description:
      'Bodyweight circuits, med-ball patterns, and controlled explosive work to build balance, coordination, and power.',
  },
  {
    title: 'Defensive mechanics',
    description:
      'Guard awareness, slips, rolls, and calm reactions that improve positioning and composure.',
  },
  {
    title: 'Beginner-friendly coaching',
    description:
      'Patient instruction for clients building confidence, consistency, and a stronger physical foundation.',
  },
]

const pricingPlans = [
  {
    name: 'Single Session',
    price: '$75',
    cadence: null,
    description: 'One private 60-minute boxing & conditioning session.',
  },
  {
    name: '4 Sessions / Month',
    price: '$240',
    cadence: null,
    description: 'Great for beginners building consistency and fundamentals.',
  },
  {
    name: '8 Sessions / Month',
    price: '$440',
    cadence: null,
    description: 'For clients looking for structured weekly progress.',
    featured: true,
  },
  {
    name: '12 Sessions / Month',
    price: '$600',
    cadence: null,
    description: 'Focused training for conditioning, movement, and skill development.',
  },
  {
    name: 'Couples Training',
    price: 'Starting at $300',
    cadence: '/ month',
    description: 'Private partner sessions customized around schedule and goals.',
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-line mb-10 pt-6">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-5 text-4xl leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="noise-overlay min-h-screen overflow-x-hidden bg-[color:var(--background)]">
      <header className="sticky top-0 z-40 border-b border-white/6 bg-black/50 backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between py-4">
          <a href="#top" className="font-display text-xl tracking-[0.24em] text-white">
            MBC
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted)] md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#focus" className="transition hover:text-white">
              Training Focus
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <a href="#contact" className="secondary-button text-sm">
            Request Coaching
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div className="container-shell py-6 md:py-8">
            <div className="surface relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-10 md:py-12 lg:min-h-[88vh]">
              <div className="hero-media" aria-hidden="true">
                <div className="hero-media-grid" />
              </div>
              <div className="relative z-10 grid min-h-[78vh] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-4">
                <Reveal className="max-w-3xl self-center lg:pr-8">
                  <p className="eyebrow">midnightboxingclub.fit</p>
                  <h1 className="font-display mt-6 text-5xl leading-[0.94] tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-[6.25rem]">
                    MIDNIGHT
                    <span className="block text-[color:var(--accent)]">BOXING CLUB</span>
                  </h1>
                  <p className="mt-6 text-xl text-white/88 md:text-2xl">
                    Private Boxing &amp; Conditioning
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                    Focused 1-on-1 coaching for beginners and motivated individuals looking
                    to build movement, confidence, conditioning, discipline, and real boxing
                    fundamentals.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href="#contact" className="primary-button">
                      Request Private Coaching
                    </a>
                    <a href="#pricing" className="secondary-button">
                      View Pricing
                    </a>
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Currently accepting a limited number of private clients in Pasadena /
                    Los Angeles.
                  </p>
                </Reveal>

                <Reveal className="relative w-full max-w-md lg:ml-auto lg:self-center" delay={120}>
                  <div className="surface rounded-[1.75rem] p-6 md:p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                      After Hours
                    </p>
                    <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-black/40 p-5">
                      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        Training Atmosphere
                      </p>
                      <p className="mt-4 text-lg leading-8 text-white/88">
                        Calm instruction, disciplined pacing, and a private setting built for
                        focused work.
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4 md:p-5">
                        <p className="font-display text-3xl leading-none text-white">1-on-1</p>
                        <p className="mt-2 text-sm text-[color:var(--muted)]">
                          Coaching only
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4 md:p-5">
                        <p className="font-display text-3xl leading-none text-white">60</p>
                        <p className="mt-2 text-sm text-[color:var(--muted)]">
                          Minute sessions
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                      Private coaching for beginners and motivated clients who want calm,
                      structured training without unnecessary noise.
                    </p>
                    {/* Add a custom image or video later by updating the hero background styles in src/index.css */}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <SectionHeading eyebrow="About" title="Coached by Noe" />
            </Reveal>
            <Reveal className="surface rounded-[2rem] p-8 md:p-10" delay={100}>
              <p className="font-display text-3xl leading-tight text-white md:text-4xl">
                “Hi, I’m Noe. I offer private boxing and conditioning sessions focused on
                fundamentals, movement, defense, footwork, conditioning, and building
                confidence through disciplined training.”
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                Training is intentionally limited to maintain consistency, quality, and
                individualized attention.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="focus" className="section-spacing">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Training Focus"
                title="Structured fundamentals, taught with patience."
                description="Every session is built around useful detail, calm instruction, and steady progress."
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {focusAreas.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="surface card-hover h-full rounded-[1.75rem] p-7">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display mt-4 text-3xl text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Private Coaching"
                title="Session format with a clear, practical structure."
                description="Private training designed for beginners and motivated individuals who want calm, focused instruction in a structured setting."
              />
              <p className="max-w-xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                Training availability is intentionally limited.
              </p>
              <p className="mt-3 max-w-xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                Pasadena / Los Angeles.
              </p>
            </Reveal>
            <Reveal className="surface rounded-[2rem] p-6 md:p-8" delay={100}>
              <div className="mb-6 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Session Format
                </p>
                <p className="mt-3 font-display text-3xl leading-tight text-white">
                  60 minutes of focused private training.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
                  Sessions can include athletic drills that support agility, speed, strength,
                  and coordination alongside real boxing fundamentals.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {coachingFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      Included
                    </p>
                    <p className="font-display mt-3 text-3xl leading-tight text-white">
                      {feature.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="pricing" className="section-spacing">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Pricing"
                title="Simple private training options."
                description="Straightforward monthly options for consistent private training."
              />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 80}>
                  <article
                    className={`surface card-hover relative flex h-full flex-col rounded-[2rem] p-8 ${
                      plan.featured ? 'border-[color:var(--border)]' : ''
                    }`}
                  >
                    {plan.featured ? (
                      <div className="absolute right-6 top-6 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">
                        Most Requested
                      </div>
                    ) : null}
                    <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      Private Training
                    </p>
                    <h3 className="font-display mt-4 text-4xl text-white">{plan.name}</h3>
                    <div className="mt-8 flex flex-wrap items-end gap-x-2 gap-y-1">
                      <span className="font-display text-6xl text-[color:var(--accent)]">
                        {plan.price}
                      </span>
                      {plan.cadence ? (
                        <span className="pb-2 text-lg leading-none text-[color:var(--muted)]">
                          {plan.cadence}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-8 flex-1 text-base leading-8 text-[color:var(--muted)]">
                      {plan.description}
                    </p>
                    <a href="#contact" className="secondary-button mt-8 w-full">
                      Inquire
                    </a>
                    {/* Update pricing here in src/App.jsx inside the pricingPlans array */}
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="mt-6 text-center text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Training availability is intentionally limited.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-spacing">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Request private coaching."
                description="Private training inquiries only."
              />
              <p className="max-w-lg text-base leading-8 text-[color:var(--muted)] md:text-lg">
                Share a few details and we can follow up with availability, scheduling, and
                next steps.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Pasadena / Los Angeles
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Update contact details or add direct booking links here when ready.
                </p>
                {/* Update contact information in this section or add social / booking links */}
              </div>
            </Reveal>

            <Reveal className="surface rounded-[2rem] p-6 md:p-8" delay={100}>
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Name
                  </label>
                  <input className="field" type="text" name="name" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Email or Phone
                  </label>
                  <input
                    className="field"
                    type="text"
                    name="contact"
                    placeholder="Email address or phone number"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Message
                  </label>
                  <textarea
                    className="field min-h-36 resize-y"
                    name="message"
                    placeholder="Tell us a bit about your goals, schedule, or training interest."
                  />
                </div>
                <button type="submit" className="primary-button w-full sm:w-auto">
                  Submit Inquiry
                </button>
                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  This form is currently front-end only.
                </p>
                {/* Connect a backend later by replacing the onSubmit handler with your API or form service integration */}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6 py-10">
        <div className="container-shell flex flex-col gap-4 text-sm text-[color:var(--muted)] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[0.12em] text-white">
              MIDNIGHT BOXING CLUB
            </p>
            <p className="mt-2">Private Boxing &amp; Conditioning</p>
          </div>
          <p>Pasadena / Los Angeles</p>
        </div>
      </footer>
    </div>
  )
}
