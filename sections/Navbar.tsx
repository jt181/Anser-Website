"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-[0_10px_30px_-28px_rgba(15,23,42,0.35)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-0">
        <a
          href="#"
          className="relative block h-14 w-28 transition duration-300 hover:opacity-80 sm:h-16 sm:w-32"
          aria-label="Atria home"
        >
          <Image
            src="/images/logo.png"
            alt="Atria"
            fill
            priority
            unoptimized
            sizes="(min-width: 640px) 128px, 112px"
            className="object-contain object-left"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition duration-300 hover:text-atria-600">
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-atria-600 px-5 py-2.5 text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-atria-700 hover:shadow-md"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 shadow-sm transition duration-300 hover:border-atria-200 hover:bg-atria-50 md:hidden"
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
        <div className="border-t border-slate-200 bg-white px-5 py-6 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.45)] md:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition duration-300 hover:text-atria-600"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-atria-600 px-5 py-2.5 text-white shadow-sm transition duration-300 hover:bg-atria-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
