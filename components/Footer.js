import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-title">Body Dynamics - Rehab Solutions</div>
                        <p className="footer-tag">Evidence-Based, Collaborative, Client-Centered Care</p>
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
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>Phone: +91 902-907-0620</li>
                            <li>
                                Address: 02, Ground Floor, D Wing, Building No. 3, Golders Green CHSL, I C Colony, Borivali West, Mumbai, Maharashtra - 400103 <br /> Near YMCA Garden
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
