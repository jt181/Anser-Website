export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Start a conversation with Anser.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get in touch to discuss procurement support, negotiation training,
            mentoring or sustainable operational improvement for your
            organisation.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Contact Information
                </h3>

                <div className="mt-5 space-y-4 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Declan McDonnell
                    </span>
                    <br />
                    <a
                      href="tel:+353862420345"
                      className="transition hover:text-green-700"
                    >
                      +353 86 2420345
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Sharon Byrne
                    </span>
                    <br />
                    <a
                      href="tel:+353868213963"
                      className="transition hover:text-green-700"
                    >
                      +353 86 8213963
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Address
                    </span>
                    <br />
                    22H Axis Business Park
                    <br />
                    Tullamore, Co. Offaly
                    <br />
                    R35 YX52
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Send an Enquiry
                </h3>

                <form className="mt-5 grid gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
                  />

                  <textarea
                    placeholder="How can we help?"
                    className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=53.288779,-7.515590&z=15&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[600px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}