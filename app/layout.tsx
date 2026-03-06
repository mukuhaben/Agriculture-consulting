import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gideon Nandwa | Agricultural Consultant",
  description:
    "Agronomist and agricultural supply chain consultant helping organizations build sustainable farming systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}