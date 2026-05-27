const whatWeDoCopy = [
  "Atria provides consulting, education and mentoring services to organisations seeking practical, measurable improvements in procurement and supply chain performance.",
  "Our approach is hands-on, flexible and focused on real opportunities to improve value, reduce risk and embed more sustainable ways of working.",
  "We work across public and private sector organisations, supporting both immediate priorities and longer-term capability development.",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-6 sm:py-20"
    >
      <div className="absolute right-0 top-10 -z-10 h-72 w-72 rounded-full bg-atria-100 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-7 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atria-600 sm:text-sm sm:tracking-[0.25em]">
            What we do
          </p>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
            Practical expertise across procurement, supply chain and
            sustainability
          </h2>
        </div>

        <div className="space-y-4 text-base leading-7 text-slate-600 sm:space-y-5 sm:text-lg sm:leading-8">
          {whatWeDoCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
