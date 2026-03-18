"use client";

import { motion, Variants } from "framer-motion";

const cases = [
  {
    title: "Smallholder Moringa Export Program",
    problem:
      "Smallholder farmers lacked structured access to international moringa markets despite strong production potential.",
    impact:
      "Developed a coordinated supply chain model linking farmers, processors, and export markets, improving traceability and farmer income."
  },
  {
    title: "Climate-Resilient Farming Systems",
    problem:
      "Communities faced declining yields due to climate variability and unsustainable farming practices.",
    impact:
      "Introduced climate-smart agriculture practices including soil health management, crop diversification, and water-efficient production."
  },
  {
    title: "Organic Certification Framework",
    problem:
      "Farmer groups needed systems to meet international organic certification standards.",
    impact:
      "Designed Internal Control Systems (ICS) enabling farmer groups to pursue organic and fair trade certification."
  }
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-10 bg-gray-48">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="gold-text text-3xl font-semibold text-center mb-4"
        >
          Case Studies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white-600 max-w-2xl mx-auto mb-16"
        >
          Selected examples of agricultural development initiatives focused on
          sustainable production systems, market access, and farmer empowerment.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-gray-200 hover:shadow-xl transition"
            >

              <h3 className="text-lg font-semibold mb-4 text-gray-500">
                {c.title}
              </h3>

              <p className="text-sm text-white-600 mb-4">
                <span className="font-semibold text-gray-400">Challenge:</span>{" "}
                {c.problem}
              </p>

              <p className="text-sm text-white-600">
                <span className="font-semibold text-gray-400">Approach:</span>{" "}
                {c.impact}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}