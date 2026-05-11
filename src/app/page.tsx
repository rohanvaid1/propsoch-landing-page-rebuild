import Image from "next/image";

const comparisonRows = [
  {
    focus: "Information depth",
    propsoch: "80+ verified data points",
    portals: "20-40 listing-level data points",
  },
  {
    focus: "Transparency",
    propsoch: "Pros + cons in every recommendation",
    portals: "Mostly promotional information",
  },
  {
    focus: "Validation quality",
    propsoch: "Cross-checked by experts",
    portals: "Loose or seller-submitted checks",
  },
  {
    focus: "Support window",
    propsoch: "Guidance till final decision",
    portals: "Limited to lead generation",
  },
  {
    focus: "Decision confidence",
    propsoch: "Livability + risk perspective",
    portals: "Price-first comparison only",
  },
];

const guidedBenefits = [
  "Personalized shortlisting based on budget, commute and lifestyle",
  "Project-level due diligence with design, legal and builder signals",
  "Smarter negotiation guidance to reduce overpayment risk",
  "Side-by-side floor-plan and livability comparisons",
  "Unbiased recommendation with transparent trade-offs",
  "End-to-end support until the right home is finalized",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            PROPSOCH REBUILD
          </p>
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Talk to an Advisor
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 md:gap-20 md:py-16">
        <section className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-6 shadow-2xl md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Redesigned Hero Section
            </span>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Buy your next home with clarity, not chaos.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Get curated homes, expert-led comparisons, and transparent
              guidance from search to negotiation. Built for homebuyers who want
              fewer regrets and better decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#guided-home-buying"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Start Smart Search
              </a>
              <a
                href="#what-makes-us-different"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Compare Services
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-2xl font-bold text-cyan-300">1000+</p>
                <p className="text-xs text-slate-300">Buyers guided</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-2xl font-bold text-cyan-300">200+</p>
                <p className="text-xs text-slate-300">Homes bought/year</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-2xl font-bold text-cyan-300">~3 mo</p>
                <p className="text-xs text-slate-300">Average time saved</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <Image
              src="/images/hero-home.webp"
              alt="A modern apartment building representing curated home options."
              width={1280}
              height={820}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="what-makes-us-different"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:grid-cols-[1fr_1.2fr] md:p-10"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              What makes us different?
            </h2>
            <p className="text-slate-300">
              Rebuilt from the original comparison section with a clearer mobile
              experience, stronger visual hierarchy and better readability.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/comparison.webp"
                alt="Homebuyer reviewing options and market insights."
                width={960}
                height={700}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">
                Propsoch vs online portals comparison table
              </caption>
              <thead className="bg-cyan-400/10 text-cyan-200">
                <tr>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">
                    What buyers care about
                  </th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">
                    Propsoch
                  </th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">
                    Typical portals
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.focus} className="odd:bg-white/5">
                    <td className="border-b border-white/10 px-4 py-3 text-slate-100">
                      {row.focus}
                    </td>
                    <td className="border-b border-white/10 px-4 py-3 text-cyan-100">
                      {row.propsoch}
                    </td>
                    <td className="border-b border-white/10 px-4 py-3 text-slate-300">
                      {row.portals}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="guided-home-buying"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:grid-cols-2 md:p-10"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Guided Home Buying
            </h2>
            <p className="text-slate-300">
              Rebuilt from the original value proposition section to spotlight
              outcomes, trust signals and practical next actions.
            </p>
            <ul className="grid gap-3">
              {guidedBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-medium text-cyan-100">
              9 in 10 buyers close within 25 days with structured advisory.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <Image
              src="/images/guided-home.webp"
              alt="Happy family celebrating their home buying journey."
              width={960}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-indigo-500/10 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to buy intelligently?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Get end-to-end support from shortlisting to final negotiation with a
            transparent, data-backed advisory process.
          </p>
          <a
            href="https://www.propsoch.com/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Book a Free Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
