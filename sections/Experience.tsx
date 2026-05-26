const experienceStats = [
  "40+ years combined experience",
  "Public and private sector expertise",
  "University-level education delivery",
  "Proven negotiation and cost delivery",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-green-950 px-5 py-14 text-white sm:px-6 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_34%),linear-gradient(135deg,rgba(5,46,22,0),rgba(2,6,23,0.24))]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300 sm:text-sm sm:tracking-[0.25em]">
          Experience
        </p>

        <h2 className="mt-4 max-w-4xl text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
          Practical expertise built through decades of procurement and supply
          chain leadership.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg sm:leading-8">
          Atria combines industry experience, education delivery and hands-on
          consulting to support measurable and sustainable operational
          improvement.
        </p>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experienceStats.map((stat) => (
            <article
              key={stat}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_45px_-32px_rgba(0,0,0,0.65)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-green-300/30 hover:bg-white/8 sm:p-6"
            >
              <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                {stat}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
