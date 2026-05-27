import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-[6.25rem] sm:px-6 sm:pb-14 sm:pt-28 lg:pb-12 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e3f0e1,transparent_35%),radial-gradient(circle_at_bottom_right,#c9dfc6,transparent_30%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-atria-600 sm:text-sm sm:tracking-[0.3em]">
            Procurement • Education • Sustainability
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Supply Chain Training and Consulting
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Practical consulting, mentoring and education to improve
            procurement, supply chain performance and sustainable operations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-atria-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-atria-700 hover:shadow-md"
            >
              Get in touch
            </a>

            <a
              href="#services"
              className="inline-flex justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-atria-200 hover:text-atria-600 hover:shadow-md"
            >
              Explore services
            </a>
          </div>

        </div>

        <div className="group relative mx-auto w-full max-w-xl pb-0 sm:pb-16 lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/70 bg-slate-200 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/5 sm:aspect-[16/10] sm:rounded-[2rem]">
            <Image
              src="/images/Atria-pic1.webp"
              alt="Atria team members collaborating"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, (min-width: 640px) 576px, calc(100vw - 48px)"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-atria-950/20 via-black/5 to-white/10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.55)] ring-1 ring-atria-900/5 backdrop-blur-md sm:absolute sm:bottom-0 sm:left-8 sm:right-8 sm:mt-0 sm:gap-4 sm:p-5 lg:left-10 lg:right-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-atria-50/90 text-lg font-bold text-atria-600 shadow-inner ring-1 ring-atria-100">
              ✓
            </div>

            <div>
              <p className="text-sm font-semibold text-atria-600">
                Trusted Support
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Practical consulting and training solutions for public and
                private sector organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
