export default function Team() {
  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Meet the team
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Experienced, approachable and focused on practical results.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Anser works closely with organisations across Ireland, providing
          tailored support in procurement, training, sustainability and supply
          chain improvement.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm">
            <img
              src="/images/team/declan.jpg"
              alt="Declan McDonnell"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold">
                Declan McDonnell
              </h3>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-green-700">
                Procurement, Training & Sustainability
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Declan co-founded Anser Procurement with Sharon Byrne in 2019,
                providing consulting, training and mentoring services across
                procurement, supply chain and negotiation.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm">
            <img
              src="/images/team/sharon.jpg"
              alt="Sharon Byrne"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold">
                Sharon Byrne
              </h3>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-green-700">
                Consulting, Mentoring & Education
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Sharon co-founded Anser Procurement in 2019 and brings over 20
                years of procurement, sourcing and supply chain experience
                across regulated and non-regulated utility environments.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}