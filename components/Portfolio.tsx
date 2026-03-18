"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Moringa Value Chain Development",
    desc: "Designed an export-oriented moringa supply chain connecting smallholder farmers to international nutraceutical markets.",
    image: "/images/moringa.jpg"
  },
  {
    title: "Sesame Market Expansion",
    desc: "Structured sesame aggregation systems and market linkages for improved farmer income and traceability.",
    image: "/images/sesame.jpg"
  },
  {
    title: "Essential Oils Production Network",
    desc: "Developed farmer-based essential oil production clusters including distillation and quality control systems.",
    image: "/images/essential-oils.jpg"
  }
];

export default function Portfolio() {

  const [active, setActive] = useState<any>(null);

  return (
    <section id = "projects" className="py-0 bg-gray-48">

      <div className="max-w-7xl mx-auto px-8">

        <Reveal>
          <h2 className="gold-text text-3xl font-semibold text-center mb-4">
            Projects Highlights
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-center text-white-600 max-w-2xl mx-auto mb-16">
            Selected agricultural value chains and development projects
            designed to improve sustainability, farmer income,
            and global market access.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <Reveal key={i}>
              <div
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setActive(p)}
              >

                <img
                  src="/images/gideon.png"
                  alt={p.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-200 leading-relaxed">
                    {p.desc}
                  </p>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>

      {/* MODAL */}

      {active && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50"
          onClick={() => setActive(null)}
        >

          <div
            className="bg-white rounded-xl max-w-xl p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <h3 className="text-2xl font-bold mb-4">
              {active.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {active.desc}
            </p>

            <button
              className="bg-green-700 text-white px-6 py-2 rounded"
              onClick={() => setActive(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}