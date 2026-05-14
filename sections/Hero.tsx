export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dcfce7,transparent_35%),radial-gradient(circle_at_bottom_right,#bbf7d0,transparent_30%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Procurement • Training • Sustainability
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Procurement, training and sustainability expertise that delivers measurable value.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Anser supports organisations across Ireland through practical consulting,
            mentoring and training services focused on procurement, supply chain
            optimisation, negotiation and sustainable operational improvement.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-green-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Get in Touch
            </a>

            <a
              href="#services"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 text-sm text-slate-500">
            <div>
              <p className="text-2xl font-bold text-slate-900">Public</p>
              <p>Sector Support</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">QQI</p>
              <p>Training Programs</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">Ireland</p>
              <p>Nationwide Support</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl">
            <div className="flex h-full items-center justify-center text-slate-500">
              Future Image Placeholder
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-3xl border border-green-100 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold text-green-700">
              Trusted Support
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Supporting public and private sector organisations through
              practical consulting and training solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}