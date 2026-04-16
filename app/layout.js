import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Body Dynamics - Rehab Solutions",
  description: "Evidence-Based, Collaborative, Client-Centered Care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <div className="utility-bar"> */}
        {/* <div className="container utility-inner"> */}
        {/* <span className="contact-info">Call us: +91 902-907-0620 | Email: info@bodydynamics.com</span> */}
        {/* <div className="utility-links"> */}
        {/* <Link href="/#services">Programs</Link>
              <Link href="/#team">Specialists</Link>
              <Link href="/#contact">Contact</Link> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <Navbar />

        <ScrollReveal />

        {children}

        <Footer />
      </body>
    </html>
  );
}
