export default function CallToAction() {
  return (
    <section className="px-5 py-14 sm:px-6 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-green-800 px-6 py-10 text-white shadow-[0_28px_70px_-34px_rgba(15,23,42,0.55)] ring-1 ring-green-900/10 sm:rounded-[2rem] sm:px-8 sm:py-14 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(187,247,208,0.2),transparent_34%),linear-gradient(135deg,rgba(22,101,52,0),rgba(5,46,22,0.34))]" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200 sm:text-sm sm:tracking-[0.25em]">
            Final step
          </p>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
            Ready to improve procurement and supply chain performance?
          </h2>

          <p className="mt-5 text-base leading-7 text-green-100 sm:text-lg sm:leading-8">
            Get in touch to discuss how Atria can support your organisation
            through consulting, training or mentoring.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-green-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-md sm:w-fit"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
