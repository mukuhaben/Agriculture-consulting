import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-green-900 text-white py-24 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Book an Agricultural Consultation
      </h2>

      <Link
        href="/consultation"
        className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold inline-block"
      >
        Schedule Now
      </Link>

    </section>
  );
}