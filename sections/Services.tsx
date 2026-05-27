"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Consulting",
    icon: "strategy",
    image: "/images/consulting.png",
    imageAlt:
      "Consulting service visual for procurement and supply chain improvement.",
    preview:
      "Focused procurement and supply chain advice for practical operational improvement.",
    description:
      "Focused support to improve supply chain performance:",
    details: [
      "Sourcing strategy and operating models",
      "Spend analysis and opportunity identification",
      "Tender design and evaluation",
      "Supplier performance and development",
      "Cost reduction and value improvement initiatives",
      "Supply chain risk and resilience",
    ],
  },
  {
    title: "Training / Education",
    icon: "presentation",
    image: "/images/training.PNG",
    imageAlt:
      "Training service visual for negotiation and procurement workshops.",
    preview:
      "Practical, experience-led learning designed for immediate application.",
    description:
      "Practical, experience-led learning designed for immediate application:",
    details: [
      "Procurement and supply chain fundamentals",
      "Public procurement and governance",
      "Sustainable procurement practices",
      "Logistics, planning and operations",
      "Accredited and non-accredited programmes",
      "In-company and academic delivery",
    ],
  },
  {
    title: "Mentoring",
    icon: "people",
    image: "/images/mentoring.PNG",
    imageAlt:
      "Mentoring service visual for procurement capability development.",
    preview:
      "One-to-one and organisational mentoring to strengthen procurement capability.",
    description:
      "One-to-one and team-based support to build capability:",
    details: [
      "Procurement leadership development",
      "Negotiation coaching and preparation",
      "On-the-job mentoring and support",
      "Embedding best practice ways of working",
      "Supporting organisational change and development",
    ],
  },
  {
    title: "Negotiation",
    icon: "book",
    image: "/images/education.PNG",
    imageAlt:
      "Negotiation service visual for commercial preparation and outcomes.",
    preview:
      "Building practical negotiation capability for measurable commercial outcomes.",
    description: "Building practical negotiation capability:",
    details: [
      "Commercial negotiation strategies",
      "Preparation and structuring",
      "Real-world case application",
      "Coaching for live negotiations",
      "Delivering measurable commercial outcomes",
    ],
  },
];

type ServiceIconName = (typeof services)[number]["icon"];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-atria-50 text-atria-600 ring-1 ring-atria-100 transition duration-300 group-hover:bg-atria-600 group-hover:text-white group-hover:ring-atria-600">
      {name === "strategy" && (
        <svg aria-hidden="true" {...commonProps}>
          <path d="M5 19c7-1 11-5 13-13" />
          <path d="M8 16c-2-5 1-9 7-10 2 6-1 10-7 10Z" />
          <path d="M6 20h12" />
        </svg>
      )}

      {name === "presentation" && (
        <svg aria-hidden="true" {...commonProps}>
          <path d="M4 5h16v10H4z" />
          <path d="M8 19l4-4 4 4" />
          <path d="M9 10h6" />
          <path d="M9 13h3" />
        </svg>
      )}

      {name === "book" && (
        <svg aria-hidden="true" {...commonProps}>
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H19v17H8.5A3.5 3.5 0 0 0 5 22Z" />
          <path d="M5 5.5V22" />
          <path d="M9 6h6" />
          <path d="M9 10h5" />
        </svg>
      )}

      {name === "people" && (
        <svg aria-hidden="true" {...commonProps}>
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 11a3 3 0 1 0 0-6" />
          <path d="M3 20a5 5 0 0 1 10 0" />
          <path d="M13 16a5 5 0 0 1 8 4" />
        </svg>
      )}
    </span>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!activeService) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  return (
    <section
      id="services"
      className="bg-slate-50 px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pt-12"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atria-600 sm:text-sm sm:tracking-[0.25em]">
          Key service areas
        </p>

        <h2 className="mt-4 max-w-3xl text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
          Focused support for procurement, learning, mentoring and negotiation.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Explore the core areas where Atria helps organisations improve value,
          reduce risk and build practical internal capability.
        </p>

        <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Learn more about ${service.title}`}
              onClick={() => setActiveService(service)}
              className="group flex h-[23.5rem] cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm outline-none transition duration-300 ease-out hover:-translate-y-1.5 hover:border-atria-300 hover:shadow-[0_26px_55px_-30px_rgba(15,23,42,0.55)] focus-visible:ring-2 focus-visible:ring-atria-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:h-[23.875rem]"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 273px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-950/5 to-white/10" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <ServiceIcon name={service.icon} />
                  <h3 className="text-xl font-semibold text-slate-900 transition duration-300 group-hover:text-atria-600">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.preview}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-atria-600 transition duration-300 group-hover:gap-3 group-hover:text-atria-700">
                  Learn more
                  <span aria-hidden="true">-&gt;</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeService && (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-slate-950/50 px-4 py-5 backdrop-blur-sm sm:items-center sm:px-6"
          role="presentation"
          onMouseDown={() => setActiveService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            className="mx-auto max-h-[calc(100vh-2.5rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/80 bg-white p-6 shadow-[0_34px_100px_-34px_rgba(15,23,42,0.72)] ring-1 ring-slate-900/5 sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-atria-600">
                  Service
                </p>
                <h3
                  id="service-dialog-title"
                  className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
                >
                  {activeService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xl leading-none text-slate-600 shadow-sm transition duration-300 hover:border-atria-200 hover:bg-atria-50 hover:text-atria-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atria-600"
                aria-label="Close service details"
              >
                x
              </button>
            </div>

            <div className="mt-7 rounded-2xl border border-atria-100 bg-gradient-to-br from-atria-50/80 via-white to-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6">
              <p className="text-base leading-7 text-slate-700">
                {activeService.description}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Includes
              </p>
              <ul className="mt-4 columns-1 gap-6 text-sm leading-6 text-slate-700 sm:columns-2">
                {activeService.details.map((detail) => (
                  <li key={detail} className="mb-3 flex break-inside-avoid gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-atria-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
