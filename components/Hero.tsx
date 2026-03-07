"use client";

import { motion } from "framer-motion";
import Image from "next/image";



export default function Hero() {
  return (
    <section id = "home" className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 text-white py-32">

      {/* Floating gradient background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-green-500/20 blur-3xl rounded-full -top-40 -left-40"
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-3xl rounded-full bottom-0 right-0"
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Driving{" "}
            <span className="text-green-400">
              Agricultural Growth
            </span>{" "}
            & Innovation in Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-200 mb-8 max-w-lg"
          >
            Expert consulting to transform agricultural value chains,
            empower smallholder farmers, and unlock global markets.
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition">
              Get In Touch
            </button>

            <button className="border border-white/40 hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition">
              View Portfolio
            </button>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >

         <Image
  src="/images/gideon.png"
  alt="Gideon Ndegwa"
  width={600}
  height={600}
  className="rounded-xl shadow-2xl"
/>

        </motion.div>

      </div>

      {/* CREDIBILITY METRICS */}

      <div className="relative mt-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8">

          <Metric number="7+" label="Years Experience" />
          <Metric number="5+" label="Projects Completed" />
          <Metric number="100K+" label="Farmers Impacted" />

        </div>

      </div>

    </section>
  );
}

function Metric({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-3xl font-bold text-green-400">
        {number}
      </div>

      <div className="text-sm text-gray-200 mt-1">
        {label}
      </div>
    </motion.div>
  );
}