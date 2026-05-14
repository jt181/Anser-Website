const services = [
  {
    title: "Consulting",
    description:
      "Practical procurement and supply chain consulting focused on cost reduction, tender support, procurement strategy and operational improvement.",
  },
  {
    title: "Negotiation Training",
    description:
      "Interactive negotiation training programmes covering planning, communication and closing techniques for both online and face-to-face delivery.",
  },
  {
    title: "Education",
    description:
      "University-level education and professional development support across procurement, logistics, supply chain and strategic sourcing.",
  },
  {
    title: "Mentoring",
    description:
      "Experienced one-to-one and organisational mentoring support designed to strengthen procurement capability and long-term performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          What we do
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Practical expertise across procurement, training and sustainability.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Anser provides consulting, education and mentoring services for
          organisations seeking practical improvements in procurement, supply
          chain performance and sustainable operational development.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-green-700">
                {service.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}