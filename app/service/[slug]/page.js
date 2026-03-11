import { SERVICES_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceCarousel from "@/components/ServiceCarousel";

export async function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];
    if (!service) return { title: "Not Found" };

    return {
        title: `${service.title} - Body Dynamics`,
        description: service.hero_desc,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];

    if (!service) {
        notFound();
    }

    return (
        <main>
            <header className="sc-hero">
                <svg className="hero-curves" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <path d="M0 600 Q360 450 760 530 Q1140 600 1600 390" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M0 660 Q390 500 790 580 Q1180 640 1600 460" stroke="white" strokeWidth="1.6" fill="none" />
                    <path d="M0 720 Q430 570 820 640 Q1220 705 1600 560" stroke="white" strokeWidth="2.6" fill="none" />
                </svg>

                <div className="container">
                    <Link href="/#services" className="sc-back">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to Services
                    </Link>

                    <h1>{service.title}</h1>
                    <p>{service.hero_desc}</p>

                    <ServiceCarousel images={service.images} title={service.title} />

                    <div className="sc-goals">
                        {service.pills.map((pill, idx) => (
                            <div key={idx} className="sc-goal-pill">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                                {pill}
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            <section className="sc-section sc-section-conditions">
                <div className="container">
                    <div className="sc-intro">
                        <h2 className="section-title">Where we can help</h2>
                        <div className="section-line" style={{ marginInline: "auto" }}></div>
                        <p>Our specialists assess, diagnose, and treat a wide range of conditions, including:</p>
                    </div>
                    <div className="sc-conditions-grid">
                        {service.conditions.map((condition, idx) => (
                            <div key={idx} className="sc-condition">{condition}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sc-section sc-section-strategies">
                <div className="container">
                    <div className="sc-intro">
                        <h2 className="section-title">Therapy Strategies</h2>
                        <div className="section-line" style={{ marginInline: "auto" }}></div>
                        <p>Therapy is individualized and evidence-based, tailored to each patient's specific needs and goals.</p>
                    </div>
                    <div className="sc-strategies-grid">
                        {service.strategies.map((strategy, idx) => (
                            <div key={idx} className="sc-strategy">
                                <div className="sc-strategy-num">{idx + 1}</div>
                                <strong>{strategy.title}</strong>
                                <p>{strategy.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {service.extra_info && (
                <section className="sc-section sc-section-audiology">
                    <div className="container">
                        <div className="sc-intro">
                            <h2 className="section-title">{service.extra_info.title}</h2>
                            <div className="section-line" style={{ marginInline: "auto" }}></div>
                            <p>{service.extra_info.desc}</p>
                        </div>
                        <div className="sc-audio-grid">
                            {service.extra_info.items.map((item, idx) => (
                                <div key={idx} className="sc-audio-item">
                                    <div className="sc-audio-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 3a9 9 0 0 1 0 18" />
                                        </svg>
                                    </div>
                                    <span className="sc-audio-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
