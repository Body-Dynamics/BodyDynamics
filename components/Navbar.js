"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const handleLinkClick = (e, targetId) => {
        closeMenu();
        // If it's a hash link on the same page
        if (targetId.startsWith("/#")) {
            const id = targetId.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, null, `/#${id}`);
            }
        }
    };

    return (
        <nav id="navbar" className={scrolled ? "scrolled" : ""}>
            <div className="container nav-inner">
                <Link href="/" className="nav-logo" aria-label="Body Dynamics Home" onClick={closeMenu}>
                    <img src="/images/BodyDynamics_Logo_Two_Tone_Flipped.jpg" alt="Body Dynamics Logo" />
                    <div className="logo-text">
                        <div className="brand">Body Dynamics</div>
                    </div>
                </Link>

                <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
                    <ul className="nav-links" id="nav-links" onClick={(e) => e.stopPropagation()}>
                        <li><Link href="/#home" onClick={(e) => handleLinkClick(e, "/#home")}>Home</Link></li>
                        <li><Link href="/#welcome" onClick={(e) => handleLinkClick(e, "/#welcome")}>About Us</Link></li>
                        <li><Link href="/#services" onClick={(e) => handleLinkClick(e, "/#services")}>Services</Link></li>
                        <li><Link href="/#team" onClick={(e) => handleLinkClick(e, "/#team")}>Team</Link></li>
                        <li><Link href="/#contact-cta-section" onClick={(e) => handleLinkClick(e, "/#contact-cta-section")}>Contact</Link></li>
                    </ul>
                </div>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    id="hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
