export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-atria-950 px-5 py-10 text-white sm:px-6 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,155,90,0.18),transparent_34%),linear-gradient(135deg,rgba(23,41,24,0),rgba(2,6,23,0.28))]" />

      <div className="relative mx-auto grid max-w-6xl gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Atria</h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-atria-100">
            Practical consulting, mentoring and education to improve
            procurement, supply chain performance and sustainable operations.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atria-300">
            Contact
          </p>

          <div className="mt-4 space-y-2 text-sm leading-6 text-atria-100">
            <p>22H Axis Business Park</p>
            <p>Tullamore, Co. Offaly</p>
            <p>R35 YX52</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atria-300">
            Links
          </p>

          <nav className="mt-4 grid gap-2 text-sm text-atria-100">
            <a href="#services" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              Services
            </a>
            <a href="#about" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              About
            </a>
            <a href="#sectors" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              Sectors
            </a>
            <a href="#experience" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              Experience
            </a>
            <a href="#team" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              Team
            </a>
            <a href="#contact" className="w-fit transition duration-300 hover:translate-x-0.5 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-atria-200 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Atria Supply Chain. All rights reserved.</p>

        <a href="#" className="w-fit transition duration-300 hover:text-white">
          Back to top
        </a>
      </div>
    </footer>
  );
}
