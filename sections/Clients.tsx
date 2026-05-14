export default function Clients() {
  const highlights = [
    "20+ years procurement experience",
    "Public and private sector expertise",
    "University-level education delivery",
    "Negotiation and mentoring support",
    "Supply chain optimisation focus",
    "Sustainable operational improvement",
  ];

  return (
    <section
      id="clients"
      className="bg-green-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
          Experience That Adds Value
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
          Practical expertise built through decades of procurement and supply
          chain leadership.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
          Anser combines industry experience, education delivery and practical
          consulting expertise to support organisations seeking measurable,
          sustainable operational improvement.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-green-900 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-lg font-semibold text-white">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}