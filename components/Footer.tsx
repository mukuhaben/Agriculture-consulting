export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">

        <p>© {new Date().getFullYear()} Gideon Nandwa</p>

        <p className="mt-2">
          Agricultural Consultant • Sustainable Farming Systems
        </p>

      </div>
    </footer>
  );
}