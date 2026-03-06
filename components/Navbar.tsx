"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">

          <Image
            src="/images/logo.png"
            alt="Gideon Consulting"
            width={180}
            height={50}
            priority
          />

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <Link href="/services" className="hover:text-green-700 transition">
            Services
          </Link>

          <Link href="/portfolio" className="hover:text-green-700 transition">
            Portfolio
          </Link>

          <Link href="/case-studies" className="hover:text-green-700 transition">
            Case Studies
          </Link>

          <Link href="/blog" className="hover:text-green-700 transition">
            Blog
          </Link>

          <Link
            href="/consultation"
            className="bg-green-700 text-white px-5 py-2 rounded-full shadow hover:bg-green-800 transition"
          >
            Book Consultation →
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-700 bg-white/90 backdrop-blur-lg">

          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>

          <Link
            href="/consultation"
            className="bg-green-700 text-white px-4 py-2 rounded-md w-fit"
          >
            Book Consultation
          </Link>

        </div>

      )}

    </nav>
  );
}