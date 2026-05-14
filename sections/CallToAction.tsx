export default function CallToAction() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-green-800 px-8 py-16 text-white shadow-xl md:px-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-200">
            Ready to improve value?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s discuss how Anser can support your organisation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-green-100">
            Whether you need procurement support, negotiation training,
            education delivery or mentoring, Anser can help identify practical
            next steps.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-green-800 transition hover:bg-green-50"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}