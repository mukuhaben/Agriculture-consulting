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

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Case Studies
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Selected examples of agricultural development initiatives focused on
          sustainable production systems, market access, and farmer empowerment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {c.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold text-gray-800">Challenge:</span>{" "}
                {c.problem}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Approach:</span>{" "}
                {c.impact}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}