export default function Footer() {
  return (
    <footer className="radial-gradient(circle at 20% 10%, rgba(41,255,163,0.18), transparent 40%),
  radial-gradient(circle at 80% 20%, rgba(255,211,77,0.15), transparent 40%),
  linear-gradient(180deg,#0b1f16,#050806 70%); py-8 mt-20">
      <div className="max-w-1xl mx-auto px-6 text-center text-sm">

        <p>© {new Date().getFullYear()} Gideon Nandwa</p>

        <p className="mt-2">
          Agricultural Consultant • Sustainable Farming Systems
        </p>

      </div>
    </footer>
  );
}