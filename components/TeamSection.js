import React from 'react';

// Replicating main.js team data
const teamColumns = [
    // ── Column 1: Physiotherapy ──────────────────────────────────────────────
    [
        {
            dept: "Physiotherapy",
            members: [
                { name: "L. CHACKO", quals: ["BPT"] },
                { name: "SHRUTI CHACKO", quals: ["BPT, NDT"] },
                { name: "AMRUTA KULKARNI", quals: ["BPT, NDT"] },
                { name: "AMRUTA SHAH", quals: ["BPT, NDT"] }
            ]
        }
    ],

    // ── Column 2: Occupational Therapy ───────────────────────────────────────
    [
        {
            dept: "Occupational Therapy",
            members: [
                { name: "MADHURI MALAKAR", quals: ["M.O.Th.", "SI and HWT Certified"] },
                { name: "KIRAN PAL", quals: ["M.O.Th."] },
                { name: "KHUSHBU SHAH", quals: ["B.O.Th."] },
                { name: "JILL SAVANI", quals: ["B.O.Th."] },
                { name: "PRIYANKA DUBE", quals: ["B.O.Th."] }
            ]
        }
    ],

    // ── Column 3: Speech & Language Therapy + Remedial Therapy ───────────────
    [
        {
            dept: "Speech & Language Therapy",
            members: [
                { name: "SHRUTI DEORE", quals: ["MASLP"] },
                { name: "KRISTI KRISHNA", quals: ["MSC SLP"] },
            ]
        },
        {
            dept: "Remedial Therapy",
            members: [
                { name: "ALKA AGRAWAL", quals: ["B.O.Th (Remedial Therapist)"] },
                { name: "TEJAL SHAH", quals: ["B.Ed, Learning Disability", "Special Educator"] }
            ]
        }
    ],

    // ── Column 4: Behavioural Therapy + Psychological Analysis ───────────────
    [
        {
            dept: "Behavioural Therapy",
            members: [
                { name: "RAZIA ALI", quals: ["Bsc, B.Ed,", "BCABA (ABA Therapy)", "International Behavior Analyst (IBA)"] }
            ]
        },
        {
            dept: "Psychological Analysis & Counseling Services",
            members: [
                { name: "DHARA BANGERA", quals: ["M.A Psychology", "Clinical Psychologist"] },
                { name: "DARSHANA JAIN", quals: ["M.A Applied Psychology", "Counseling Psychologist"] }
            ]
        }
    ]
];

export default function TeamSection() {
    return (
        <section id="team" className="section-pad">
            <div className="container">
                <div className="team-head reveal">
                    <span className="section-label">Our Team</span>
                    <h2 className="section-title">Our Multidisciplinary Team</h2>
                    <div className="section-line"></div>
                    <p className="section-sub">A coordinated group of rehabilitation professionals committed to your progress.</p>
                </div>

                <div id="team-container">
                    <div className="dept-grid-container">
                        {teamColumns.map((col, colIndex) => (
                            <div key={colIndex} className="dept-column reveal">
                                {col.map((deptObj, deptIndex) => (
                                    <div key={deptIndex} className="dept-section">
                                        <div className="dept-title">{deptObj.dept}</div>
                                        <div className="dept-members">
                                            {deptObj.members.map((member, memberIndex) => (
                                                <div key={memberIndex} className="team-card-compact">
                                                    <div className="member-name">{member.name}</div>
                                                    <div className="member-spec">
                                                        {member.quals.join(", ")}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
