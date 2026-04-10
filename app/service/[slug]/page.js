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

            {service.overview && (
                <section className="sc-section sc-section-overview" style={{ background: "linear-gradient(to bottom, var(--navy), var(--teal))" }}>
                    <div className="container">
                        <div className="sc-intro">
                            <h2 className="section-title" style={{ color: "#ffffff" }}>Overview</h2>
                            <div className="section-line" style={{ marginInline: "auto", background: "var(--sky)" }}></div>
                        </div>
                        <div style={{ maxWidth: "900px", margin: "0 auto", background: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)", borderLeft: "4px solid var(--sky)", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", backdropFilter: "blur(10px)" }}>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "rgba(255, 255, 255, 0.95)", margin: 0, textAlign: "center" }}>
                                {service.overview}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className="sc-section sc-section-conditions">
                <div className="container">
                    <div className="sc-intro">
                        <h2 className="section-title">Where we can help</h2>
                        <div className="section-line" style={{ marginInline: "auto" }}></div>
                        <p>Our specialists assess, diagnose, and treat a wide range of conditions, including:</p>
                    </div>
                    <div className="sc-conditions-grid">
                        {service.conditions.map((condition, idx) => {
                            if (slug === "physiotherapy") {
                                return (
                                    <details key={idx} className="sc-condition dropdown-condition">
                                        <summary>
                                            <span style={{flex: 1}}>{condition}</span>
                                            <svg className="sc-dropdown-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </summary>
                                        <div className="sc-condition-content">
                                            {/* Cases will be added here later */}
                                        </div>
                                    </details>
                                );
                            }
                            return (
                                <div key={idx} className="sc-condition">{condition}</div>
                            );
                        })}
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
                    <div className="sc-strategies-content">
                        {service.strategies.some(s => !s.subSections) && (
                            <div className="sc-strategies-grid">
                                {service.strategies.filter(s => !s.subSections).map((strategy, idx) => (
                                    <div key={idx} className="sc-strategy">
                                        <div className="sc-strategy-num">{idx + 1}</div>
                                        <strong>{strategy.title}</strong>
                                        <p style={{ whiteSpace: "pre-line" }}>{strategy.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {service.strategies.filter(s => s.subSections).map((strategy, idx) => (
                            <div key={`group-${idx}`} className="sc-strategy-group" style={{ marginTop: idx > 0 || service.strategies.some(s => !s.subSections) ? "5rem" : "1rem" }}>
                                <div className="sc-strategy-header">
                                    <h3 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem", borderBottom: "2px solid #A9CBE0", paddingBottom: "0.5rem", display: "inline-block" }}>
                                        {strategy.title}
                                    </h3>
                                    <p style={{ whiteSpace: "pre-line", color: "var(--muted)", lineHeight: "1.7", fontSize: "1rem", maxWidth: "900px" }}>
                                        {strategy.desc}
                                    </p>
                                    {strategy.aim && (
                                        <div style={{ marginTop: "1.5rem", padding: "1.5rem", background: "rgba(169, 203, 224, 0.15)", borderRadius: "12px", borderLeft: "4px solid var(--teal)", maxWidth: "900px" }}>
                                            {typeof strategy.aim === "string" ? (
                                                <p style={{ whiteSpace: "pre-line", color: "var(--navy)", lineHeight: "1.7", fontSize: "0.95rem", margin: 0, fontWeight: "500" }}>
                                                    {strategy.aim}
                                                </p>
                                            ) : (
                                                <div style={{ color: "var(--navy)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                                                    <p style={{ fontWeight: "600", marginBottom: "0.2rem" }}>{strategy.aim.intro}</p>
                                                    <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                                                        {strategy.aim.points.map((pt, i) => <li key={i} style={{ marginBottom: "0.3rem" }}>{pt}</li>)}
                                                    </ul>
                                                    <p style={{ fontWeight: "600", marginBottom: "0.2rem" }}>{strategy.aim.outro}</p>
                                                    <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                                                        {strategy.aim.outcomes.map((pt, i) => <li key={i} style={{ marginBottom: "0.3rem" }}>{pt}</li>)}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="sc-strategies-grid" style={{ marginTop: "2rem" }}>
                                    {strategy.subSections.map((sub, sIdx) => {
                                        if (sub.highlight) {
                                            return (
                                                <div key={sIdx} className="sc-strategy" style={{ 
                                                    background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)", 
                                                    borderColor: "transparent",
                                                    boxShadow: "0 12px 30px rgba(9, 44, 86, 0.25)",
                                                    position: "relative",
                                                    overflow: "hidden"
                                                }}>
                                                    <div className="sc-strategy-num" style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff", position: "relative", zIndex: 1 }}>
                                                        {sIdx + 1}
                                                    </div>
                                                    <strong style={{ color: "#ffffff", position: "relative", zIndex: 1, fontSize: "1.05rem", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>{sub.title}</strong>
                                                    <p style={{ whiteSpace: "pre-line", color: "rgba(255,255,255,0.9)", position: "relative", zIndex: 1, marginTop: "0.2rem" }}>{sub.desc}</p>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div key={sIdx} className="sc-strategy">
                                                <div className="sc-strategy-num">{sIdx + 1}</div>
                                                <strong>{sub.title}</strong>
                                                <p style={{ whiteSpace: "pre-line" }}>{sub.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {service.signs_of_need && (
                <section className="sc-section sc-section-signs" style={{ background: "rgba(242, 246, 249, 0.5)" }}>
                    <div className="container">
                        <div className="sc-intro">
                            <h2 className="section-title">Signs Your Child May Benefit</h2>
                            <div className="section-line" style={{ marginInline: "auto" }}></div>
                            <p>Here are some indicators that occupational therapy or sensory integration might be beneficial.</p>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginTop: "2rem" }}>
                            {service.signs_of_need.map((group, idx) => (
                                <div key={`sign-group-${idx}`} style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ textAlign: "left", marginBottom: "1.2rem" }}>
                                        <h3 style={{ fontSize: "1.25rem", color: "var(--teal)", margin: 0, borderBottom: "2px solid rgba(169, 203, 224, 0.4)", paddingBottom: "0.5rem", display: "inline-block" }}>
                                            {group.category}
                                        </h3>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                                        {group.items.map((item, iIdx) => (
                                            <div key={iIdx} className="sc-strategy" style={{ padding: "1.2rem", margin: 0, minHeight: "auto", flex: 1, display: "flex", alignItems: "center", background: "rgba(169, 203, 224, 0.15)", borderRadius: "12px", border: "1px solid rgba(169, 203, 224, 0.3)" }}>
                                                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--navy)", lineHeight: "1.5" }}>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


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
