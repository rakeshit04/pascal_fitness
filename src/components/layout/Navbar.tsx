"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 z-[999] w-[95%] max-w-6xl -translate-x-1/2">
      <div className="rounded-3xl border border-white/20 bg-white/90 backdrop-blur-xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#home">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
            </a>  
              <span className="hidden uppercase text-sm font-bold text-black sm:block md:text-base">
                PASCAL fitness
              </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-5 py-2 text-xl font-semibold text-[#1F1F1F] transition hover:bg-[#F62477] hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="text-2xl text-black md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[#1F1F1F] transition hover:bg-[#8ca660] hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}