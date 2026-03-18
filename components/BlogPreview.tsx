import Link from "next/link";

const posts = [
  {
    title: "Climate-Smart Agriculture for Smallholder Farmers",
    desc: "How climate-resilient farming practices can improve productivity while protecting natural resources."
  },
  {
    title: "Building Sustainable Agricultural Supply Chains",
    desc: "Key principles for developing transparent, traceable, and profitable agricultural value chains."
  },
  {
    title: "Organic Certification for Farmer Groups",
    desc: "Understanding Internal Control Systems (ICS) and the pathway to international organic certification."
  }
];

export default function BlogPreview() {
  return (
    <section id = "blog" className="py-0">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="gold-text text-3xl font-semibold text-center mb-4">
          Insights
        </h2>

        <p className="text-center text-white-600 max-w-2xl mx-auto mb-16">
          Articles and perspectives on sustainable agriculture,
          agribusiness development, and climate-resilient farming systems.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((p, i) => (
            <div
              key={i}
              className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-500">
                {p.title}
              </h3>

              <p className="text-white-600 text-sm leading-relaxed mb-5">
                {p.desc}
              </p>

              <Link
                href="/blog"
                className="text-white-900 font-semibold text-sm hover:underline"
              >
                Read article →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}