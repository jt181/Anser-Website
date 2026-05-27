"use client";

import { useState } from "react";

const sectors = [
  {
    title: "Public Sector",
    intro:
      "Extensive experience working with public bodies across regulated procurement environments.",
    body: [
      "Atria supports organisations in navigating governance requirements while delivering improved value, compliance and efficiency. This includes tender design, evaluation support, procurement strategy and capability development for internal teams.",
      "Our approach balances strong governance with practical delivery — ensuring procurement processes are robust, defensible and aligned with organisational objectives.",
    ],
  },
  {
    title: "Commercial Utilities",
    intro:
      "Deep experience operating in complex, regulated and asset-intensive environments.",
    body: [
      "We support utilities in managing large-scale procurement, supplier performance and long-term strategic sourcing requirements. This includes supply chain optimisation, category management, negotiation and supplier development.",
      "Atria brings a strong understanding of balancing cost, risk, resilience and sustainability in critical infrastructure environments.",
    ],
  },
  {
    title: "SMEs / Private Sector",
    intro:
      "Practical support tailored to the needs of growing and resource-constrained organisations.",
    body: [
      "Atria works with SMEs to strengthen supply chain processes, reduce costs, improve supplier relationships and build internal capability.",
      "We focus on simple, effective solutions that deliver immediate value while creating a platform for sustainable growth and improved operational performance.",
    ],
  },
  {
    title: "Education & Development",
    intro:
      "Extensive experience designing and delivering accredited programmes across procurement, supply chain and operations management.",
    body: [
      "Atria delivers engaging, practical training for both academic institutions and industry clients. Programmes are tailored to reflect real-world challenges and focus on building applied capability.",
      "Delivery formats include workshops, modular programmes and in-company training, both in-person and online.",
    ],
  },
];

export default function Sectors() {
  const [openSector, setOpenSector] = useState<string | null>(null);

  return (
    <section
      id="sectors"
      className="relative overflow-hidden bg-slate-50 px-5 py-14 sm:px-6 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(187,247,208,0.42),transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atria-600 sm:text-sm sm:tracking-[0.25em]">
          Who we support
        </p>

        <h2 className="mt-4 max-w-3xl text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
          Practical support across public, commercial utility, private and education
          environments.
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {sectors.map((sector) => {
            const isOpen = openSector === sector.title;

            return (
              <article
                key={sector.title}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-atria-200 hover:shadow-[0_24px_55px_-34px_rgba(15,23,42,0.45)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenSector(isOpen ? null : sector.title)}
                  className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
                >
                  <span>
                    <span className="block text-xl font-semibold tracking-tight text-slate-900">
                      {sector.title}
                    </span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">
                      {sector.intro}
                    </span>
                  </span>

                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-atria-50 text-lg font-semibold text-atria-600 ring-1 ring-atria-100 transition duration-300">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                    <div className="space-y-4 pt-5">
                      {sector.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
