export default function About() {
  return (
    <section id="about" className="relative overflow-hidden  bg-white px-6 py-24">
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-green-100 blur-3xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            About Anser
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Helping organisations improve value, capability and sustainable
            growth.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Anser provides procurement, supply chain, training and advisory
            support to organisations seeking practical improvements in
            performance, efficiency and long-term value.
          </p>

          <p>
            Through spend analysis, procurement strategy, tender support,
            negotiation training and mentoring, Anser helps organisations
            identify opportunities, reduce risk and embed sustainable ways of
            working.
          </p>

          <p>
            The approach is practical, flexible and focused on measurable
            outcomes for both public and private sector organisations.
          </p>
        </div>
      </div>
    </section>
  );
}