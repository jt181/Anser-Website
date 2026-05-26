import Image from "next/image";

const founders = [
  {
    name: "Declan McDonnell",
    image: "/images/Team/declan.jpg",
    alt: "Declan McDonnell, co-founder of Atria Supply Chain",
    bio: [
      "Declan brings over 25 years’ senior leadership experience across procurement and supply chain in both public and private sector environments.",
      "He has led large-scale procurement transformation programmes, developed high-performing teams and delivered significant value through strategic sourcing and negotiation.",
      "Declan has extensive experience in education and training, designing and delivering programmes across procurement, supply chain and operations management at university level and within industry.",
      "His approach is practical, commercially focused and grounded in real-world delivery.",
    ],
  },
  {
    name: "Sharon Byrne",
    image: "/images/Team/sharon.jpg",
    alt: "Sharon Byrne, co-founder of Atria Supply Chain",
    bio: [
      "Sharon has over 20 years’ experience in procurement and supply chain across regulated and commercial environments.",
      "She brings deep expertise in procurement strategy, governance, supplier management and commercial negotiation, with a strong track record of delivering cost savings and operational improvement.",
      "Sharon is an experienced lecturer and programme developer, delivering procurement and supply chain education across academic and professional environments.",
      "She is recognised for her ability to combine analytical insight with practical implementation and strong stakeholder engagement.",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-sm sm:tracking-[0.25em]">
          Founder bios
        </p>

        <h2 className="mt-4 max-w-3xl text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
          Experienced supply chain leaders with practical delivery at the
          centre.
        </h2>

        <div className="mt-8 grid items-stretch gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_20px_45px_-28px_rgba(15,23,42,0.45)]"
            >
              <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-green-50 sm:h-80">
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/5" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {founder.name}
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {founder.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
