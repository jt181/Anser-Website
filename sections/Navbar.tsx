"use client";

import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#clients" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-green-800">
          Anser
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-green-700">
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-green-700 px-5 py-2.5 text-white transition hover:bg-green-800"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-green-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-green-700 px-5 py-2.5 text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}