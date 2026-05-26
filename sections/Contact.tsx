export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700 sm:text-sm sm:tracking-[0.25em]">
            Contact Us
          </p>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
            Start a conversation with Atria.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Get in touch to discuss procurement support, negotiation training,
            mentoring or sustainable operational improvement for your
            organisation.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-green-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:p-7">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              Send an Enquiry
            </h3>

            <form className="mt-5 grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-green-700 focus:ring-4 focus:ring-green-100 sm:py-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-green-700 focus:ring-4 focus:ring-green-100 sm:py-3"
              />

              <textarea
                placeholder="How can we help?"
                className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition duration-300 focus:border-green-700 focus:ring-4 focus:ring-green-100"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md sm:w-fit"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid gap-5 sm:gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-green-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Contact Information
              </h3>

              <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 lg:grid-cols-1">
                <p>
                  <span className="font-semibold text-slate-900">
                    Declan McDonnell
                  </span>
                  <br />
                  <a
                    href="tel:+353862420345"
                    className="transition duration-300 hover:text-green-700"
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
                    className="transition duration-300 hover:text-green-700"
                  >
                    +353 86 8213963
                  </a>
                </p>

                <p className="sm:col-span-2 lg:col-span-1">
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

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-green-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]">
              <iframe
                src="https://www.google.com/maps?q=53.288779,-7.515590&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="h-56 w-full border-0 sm:h-72 lg:h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
