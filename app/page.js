import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <header id="hero" style={{ position: "relative" }}>
        <svg
          className="hero-curves"
          viewBox="0 0 1600 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M0 600 Q360 450 760 530 Q1140 600 1600 390"
            stroke="rgba(47,65,86,.12)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 660 Q390 500 790 580 Q1180 640 1600 460"
            stroke="rgba(86,124,141,.15)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M0 720 Q430 570 820 640 Q1220 705 1600 560"
            stroke="rgba(200,217,230,.7)"
            strokeWidth="2.6"
            fill="none"
          />
        </svg>

        <div className="container hero-grid" id="home" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-chip">
              <span className="dot"></span>Established 2005
            </div>
            <h1 className="hero-headline">Body Dynamics Clinic</h1>
            <p className="hero-sub">
              Established in the year 2005; Body Dynamics Clinic provides rehabilitation services to paediatric, adult as well as geriatric patients with developmental, neurological, orthopaedic and psychological challenges.
            </p>
            <div className="hero-actions">
              <Link href="/#contact-cta-section" className="btn btn-primary">
                Book an Appointment
              </Link>
              <Link href="/#welcome" className="btn btn-outline">
                Learn More
              </Link>
              <Link href="/#team" className="btn btn-outline">
                Meet the Team
              </Link>
            </div>
          </div>

          <div className="welcome-graphic reveal reveal-delay-1" aria-hidden="true">
            <img
              src="/images/BodyDynamicsLogo.png"
              alt="Body Dynamics Clinic Logo"
              width="350"
              height="350"
            />
          </div>
        </div>
      </header>

      <section id="welcome" className="section-pad">
        <div className="container welcome-grid">
          <div className="welcome-copy reveal">
            <h2 className="section-title">Who We Are and What We Believe In</h2>
            <div className="section-line"></div>
            <p>
              As a multidisciplinary team of board certified Rehab Professionals we strive to provide evidence based, collaborative and client centred therapy services to support patient needs and empower them the best we can.
            </p>
            <Link href="/#services" className="btn btn-primary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />

      <TeamSection />

      <ContactCTA />
    </main>
  );
}
