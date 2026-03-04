"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdminLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials. Use admin/admin");
        }
    };

    if (isLoggedIn) {
        return (
            <div className="section-pad" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h1 className="section-title">Admin Dashboard</h1>
                    <div className="section-line" style={{ marginInline: "auto" }}></div>
                    <p style={{ marginTop: "20px", marginBottom: "40px" }}>Welcome to the secure admin portal.</p>

                    <div className="feature-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "600px", margin: "0 auto" }}>
                        <div className="feature-card" style={{ padding: "40px", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                            <div className="feature-icon" style={{ width: "64px", height: "64px", marginBottom: "20px" }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "10px" }}>Appointment Database</h3>
                            <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
                                Feature coming soon. Here you will be able to view and manage patient appointment bookings submitted from the main website.
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section-pad" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--off-white)" }}>
            <div className="feature-card" style={{ maxWidth: "400px", width: "100%", flexDirection: "column", padding: "40px 30px" }}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <img
                        src="/images/BodyDynamicsLogo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        style={{ margin: "0 auto 15px" }}
                    />
                    <h2 style={{ color: "var(--navy)", fontFamily: "var(--sans)" }}>Admin Login</h2>
                </div>

                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="username" style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: "500" }}>Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", width: "100%", outline: "none", fontFamily: "var(--sans)" }}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="password" style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: "500" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", width: "100%", outline: "none", fontFamily: "var(--sans)" }}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px", justifyContent: "center" }}>
                        Access Portal
                    </button>
                </form>
            </div>
        </div>
    );
}
