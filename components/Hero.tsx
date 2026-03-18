"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const whatsappLink = "https://wa.me/254719841598";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pb-40 sm:pb-52 w-full overflow-hidden flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-agriculture.png"
          alt="Agriculture"
          fill
          priority
          className="object-cover object-[70%_center]"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent z-10" />

      {/* HERO CONTENT */}
      <div className="relative z-20 max-w-[1280px] mx-auto w-full px-6 lg:px-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[640px] lg:ml-8"
        >
          {/* HEADING */}
          <motion.h1
            variants={item}
            className="text-[36px] sm:text-[44px] lg:text-[54px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#191f2f]"
          >
            Driving Sustainable
            <br />
            <span className="text-[#1B8E3E]">
              Agriculture & Value Chains
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={item}
            className="mt-6 text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 leading-[1.7] font-medium"
          >
            Empowering Farmers
            <span className="mx-3 text-[#1B8E3E]">•</span>
            Strengthening Markets
            <span className="mx-3 text-[#EA580C]">•</span>
            Building{" "}
            <span className="text-[#1B8E3E] font-semibold underline underline-offset-[4px] decoration-[2px]">
              Climate-Resilient Systems
            </span>
          </motion.p>

          {/* CONTACT INFO */}
          <motion.div
            variants={item}
            className="mt-8 sm:mt-10 text-[14px] sm:text-[25px] text-[#1f2319]"
          >
            <div className="flex flex-col gap-4 sm:gap-2 bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 p-3 sm:p-0 rounded-lg inline-block">

              {/* PHONE */}
              <div className="flex items-center gap-2">
                <span className="text-base">📞</span>
                <a
                  href="tel:+254719841598"
                  className="hover:text-[#c0eb3c] transition break-all"
                >
                  +254 719 841 598
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-2">
                <span className="text-base">✉️</span>
                <a
                  href="mailto:Nandwagideon@gmail.com?subject=Consultation%20Request"
                  className="hover:text-[#c0eb3c] transition break-all"
                >
                  Nandwagideon@gmail.com
                </a>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#c0eb3c] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                  5-5v-14c0-2.761-2.239-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.268c-.966 
                  0-1.75-.784-1.75-1.75s.784-1.75 
                  1.75-1.75 1.75.784 
                  1.75 1.75-.784 1.75-1.75 
                  1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.057-1.864-3.057-1.865 
                  0-2.151 1.455-2.151 2.963v5.698h-3v-10h2.881v1.367h.041c.401-.761 
                  1.381-1.563 2.844-1.563 3.041 0 3.604 
                  2.002 3.604 4.604v5.592z"/>
                </svg>

                <a
                  href="https://www.linkedin.com/in/gideon-nandwa-70b332118/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c0eb3c] transition break-all"
                >
                  linkedin.com/in/gideon-nandwa
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full z-30"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-10">
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat number="150+" label="Projects Delivered" />
            <Stat number="20+" label="Countries" />
            <Stat number="12+" label="Years Experience" />
            <Stat number="95%" label="Client Satisfaction" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-xl shadow-md py-6 px-4 text-center border border-gray-100">
      <div className="text-[28px] lg:text-[34px] font-bold text-[#1B8E3E]">
        {number}
      </div>
      <div className="text-gray-600 text-[13px] lg:text-[14px] mt-1">
        {label}
      </div>
    </div>
  );
}