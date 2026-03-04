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

    return (
        <nav id="navbar" className={scrolled ? "scrolled" : ""}>
            <div className="container nav-inner">
                <Link href="/" className="nav-logo" aria-label="Body Dynamics Home" onClick={closeMenu}>
                    {/* Replaced next/image with img for perfect compatibility with current styling size attributes */}
                    <img
                        src="/images/BodyDynamicsLogo.png"
                        alt="Body Dynamics Clinic Logo"
                        width="100"
                        height="100"
                        style={{ paddingBottom: "1px" }}
                    />
                    <div className="logo-text">
                        <div className="brand">Body Dynamics</div>
                    </div>
                </Link>

                <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
                    <ul className="nav-links" id="nav-links" onClick={(e) => e.stopPropagation()}>
                        <li><Link href="/#home" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/#welcome" onClick={closeMenu}>About Us</Link></li>
                        <li><Link href="/#services" onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/#team" onClick={closeMenu}>Team</Link></li>
                        <li><Link href="/#contact" onClick={closeMenu}>Contact</Link></li>
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
