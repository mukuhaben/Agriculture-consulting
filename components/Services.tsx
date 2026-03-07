"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Agricultural Supply Chain Development",
    desc: "Designing sustainable value chains that improve market access and farmer income."
  },
  {
    title: "Climate-Smart Agriculture Systems",
    desc: "Developing resilient farming systems that adapt to climate change."
  },
  {
    title: "Organic & Fair Trade Certification",
    desc: "Building Internal Control Systems and certification frameworks."
  },
  {
    title: "Smallholder Farmer Capacity Building",
    desc: "Training farmers in modern sustainable agriculture and agribusiness."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Consulting Services
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Strategic advisory and implementation support for governments,
          NGOs and agribusiness organizations.
        </motion.p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition"
            >

              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}