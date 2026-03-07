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
    <section id = "services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Consulting Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Strategic advisory and implementation support for governments,
          NGOs and agribusiness organizations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
            >

              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}