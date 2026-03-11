import Link from "next/link";
import Image from "next/image";

// Replicating main.js services data array
const services = [
    { name: "PHYSIOTHERAPY", slug: "physiotherapy", desc: "Restoring movement, strength, and physical function.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></svg>' },
    { name: "OCCUPATIONAL THERAPY", slug: "occupational-therapy", desc: "Building practical independence in daily activities.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M17 8l4 4-4 4"/></svg>' },
    { name: "SENSORY INTEGRATION THERAPY", slug: "sensory-integration-therapy", desc: "Enhancing the brain's ability to process sensory input.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>' },
    { name: "SPEECH THERAPY", slug: "speech-therapy", desc: "Improving communication, language, and speech skills.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
    { name: "BEHAVIOUR THERAPY", slug: "behaviour-therapy", desc: "Supporting positive behavior and emotional regulation.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.6-7 10-7 10z"/></svg>' },
    { name: "REMEDIAL THERAPY AND SPECIAL EDUCATION", slug: "remedial-therapy", desc: "Targeted support for learning and developmental needs.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6l9-3 9 3-9 3-9-3z"/><path d="M3 12l9 3 9-3"/><path d="M3 18l9 3 9-3"/></svg>' },
    { name: "PSYCHOLOGICAL COUNSELLING", slug: "psychological-counselling", desc: "Supportive counseling for personal, emotional, and psychological difficulties.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a8 8 0 0 1 8 8c0 3-1.6 5-3.5 6.2V21l-3.1-2.2A8.3 8.3 0 0 1 12 19a8 8 0 0 1 0-16z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/></svg>' },
    { name: "PSYCHOEDUCATIONAL & CLINICAL PSYCHOLOGY ASSESSMENT", slug: "psychoeducational-assessment", desc: "Comprehensive assessments to support accurate diagnosis and treatment planning.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path></svg>' },
    { name: "VISION THERAPY", slug: "vision-therapy", desc: "Improving visual skills and processing capabilities.", icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' }
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-pad">
            <div className="container">
                <div className="services-head reveal">
                    <span className="section-label">Services</span>
                    <h2 className="section-title">What We Offer</h2>
                    <div className="section-line"></div>
                    <p className="section-sub">
                        Practical, coordinated interventions delivered by a multidisciplinary team focused on meaningful progress.
                    </p>
                </div>
                <div className="services-grid" id="services-grid">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/service/${service.slug}`}
                            className="service-card reveal"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                        >
                            <div
                                className="service-icon"
                                dangerouslySetInnerHTML={{ __html: service.icon }}
                            />
                            <h3 className="service-title">{service.name}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
