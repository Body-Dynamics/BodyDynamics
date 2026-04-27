"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer id="contact">
            <div className="container">
                <div className={`footer-grid ${pathname === '/' ? 'has-map' : ''}`}>
                    <div className="footer-brand">
                        <div className="footer-brand-inner">
                            <div className="footer-title">Body Dynamics - Rehab Solutions</div>
                            <img src="/images/BodyDynamics_Logo_Two_Tone.jpg" alt="Body Dynamics Logo" className="footer-logo" />
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link href="/#home">Home</Link></li>
                            <li><Link href="/#welcome">About Us</Link></li>
                            <li><Link href="/#services">Services</Link></li>
                            <li><Link href="/#team">Team</Link></li>
                        </ul>
                    </div>
                    {pathname === '/' && (
                        <div className="footer-col">
                            <h4>Maps</h4>
                            <a href="https://www.google.com/maps/search/?api=1&query=Body+Dynamics,+Bldg+No.+3,+Golders+Green+Building,+Shop+No.+2,+CHSL,+near+YMCA+Ground,+D-WING,+I+C+Colony,+Borivali+West,+Mumbai,+Maharashtra+400103" target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                title="Body Dynamics Location Map"
                                src="https://maps.google.com/maps?q=Body+Dynamics,+Bldg+No.+3,+Golders+Green+Building,+Shop+No.+2,+CHSL,+near+YMCA+Ground,+D-WING,+I+C+Colony,+Borivali+West,+Mumbai,+Maharashtra+400103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="180"
                                className="footer-map"
                                style={{ border: 0, pointerEvents: 'none', display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            </a>
                            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'inherit' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                Clinic Timings: 9:00 AM - 8:00 PM
                            </div>
                        </div>
                    )}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>+91 902-907-0620</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                1:00 PM - 7:00 PM
                            </li>
                            <li>
                                Address: Body Dynamics, Bldg No. 3, Golders Green Building, Shop No. 2, CHSL, near YMCA Ground, D-WING, I C Colony, Borivali West, Mumbai, Maharashtra 400103
                            </li>
                            <li>Email: info@bodydynamics.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>&copy; 2026 Body Dynamics - Rehab Solutions. All rights reserved.</span>
                    <span>Designed for clarity, care, and trust.</span>
                </div>
            </div>
        </footer>
    );
}
