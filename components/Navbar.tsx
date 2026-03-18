"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
<nav className="sticky top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
          <Image
          src="/images/main.png"
          alt="Gideon Agriculture"
          width={180}
          height={50}
          className="object-contain drop-shadow-[0_0_10px_rgba(255,211,77,0.5)]"
          />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-white">

            <button onClick={() => scrollTo("home")} className="hover:hover:text-yellow-400">
              Home
            </button>

            <button onClick={() => scrollTo("services")} className="hover:text-yellow-400">
              Services
            </button>

            <button onClick={() => scrollTo("projects")} className="hover:text-yellow-400">
              Projects
            </button>

            <button onClick={() => scrollTo("case-studies")} className="hover:text-yellow-400">
              Case Studies
            </button>

            <button onClick={() => scrollTo("blog")} className="hover:text-yellow-400">
              Blog
            </button>

          </div>

          <a
            href="https://wa.me/254719841598"
            target="_blank"
            className="hover:text-yellow-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800"
          >
            Book Consultation →
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-green-700 text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 text-lg font-medium">

          <button onClick={() => scrollTo("home")} className="text-left">
            Home
          </button>

          <button onClick={() => scrollTo("services")} className="text-left">
            Services
          </button>

          <button onClick={() => scrollTo("projects")} className="text-left">
            Projects
          </button>

          <button onClick={() => scrollTo("case-studies")} className="text-left">
            Case Studies
          </button>

          <button onClick={() => scrollTo("blog")} className="text-left">
            Blog
          </button>

          <a
            href="https://wa.me/254719841598"
            target="_blank"
            className="bg-white text-green-700 px-5 py-3 rounded-md w-fit font-medium"
          >
            Book Consultation
          </a>

        </div>
      </div>

    </nav>
  );
}