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
      className="relative min-h-screen pb-40 w-full overflow-hidden flex items-center"
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
          className="max-w-[640px] lg:ml-10"
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

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260 }}
              href={whatsappLink}
              target="_blank"
              className="bg-[#1B8E3E] hover:bg-[#167834] text-white px-8 py-[16px] rounded-[12px] font-semibold text-[16px] shadow-lg transition text-center"
            >
              Book Consultation →
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260 }}
              href={whatsappLink}
              target="_blank"
              className="bg-white border border-gray-300 hover:bg-gray-50 px-8 py-[16px] rounded-[12px] font-semibold text-[16px] text-gray-800 shadow-md transition text-center"
            >
              Get In Touch
            </motion.a>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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