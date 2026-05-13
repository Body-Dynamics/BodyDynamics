import React from 'react';

const teamData = [
    {
        dept: "Physiotherapy",
        members: [
            { name: "L. CHACKO", quals: ["BPT."] },
            { name: "SHRUTI CHACKO", quals: ["BPT.", "NDT."] },
            { name: "AMRUTA KULKARNI", quals: ["BPT.", "NDT."] },
            { name: "AMRUTA SHAH", quals: ["BPT.", "NDT."] }
        ]
    },
    {
        dept: "Occupational Therapy",
        members: [
            { name: "MADHURI MALAKAR", quals: ["MOTh.", "SI. and HWT. Certified"] },
            { name: "KIRAN PAL", quals: ["MOTh."] },
            { name: "KHUSHBU SHAH", quals: ["BOTh."] },
            { name: "JILL SAVANI", quals: ["BOTh."] },
            { name: "PRIYANKA DUBE", quals: ["BOTh."] }
        ]
    },
    {
        dept: "Speech & Language Therapy",
        members: [
            { name: "SHRUTI DEORE", quals: ["MASLP."] },
            { name: "KRISTI KRISHNA", quals: ["MSc. SLP"] },
        ]
    },
    {
        dept: "Behavioural Therapy",
        members: [
            { name: "RAZIA ALI", quals: ["BSc.", "BEd.", "BCaBA. (ABA. Therapy)", "International Behavior Analyst (IBA)."] }
        ]
    },
    {
        dept: "Remedial Therapy",
        members: [
            { name: "ALKA AGRAWAL", quals: ["BOTh. (Remedial Therapist)"] },
            { name: "TEJAL SHAH", quals: ["BEd. (Learning Disability)", "Special Educator"] },
            { name: "GEETA NANDAKUMAR", quals: ["Dip. Remedial Education.", "Dip. Learning Disability.", "Community Based Inclusive Development (RCI)."] }
        ]
    },
    {
        dept: "Psychological Analysis & Counseling Services",
        members: [
            { name: "DHARA BANGERA", quals: ["MA. Psychology", "Clinical Psychologist"] },
            { name: "DARSHANA JAIN", quals: ["MA. Applied Psychology", "Counseling Psychologist"] }
        ]
    }
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
                        {teamData.map((deptObj, deptIndex) => (
                            <div key={deptIndex} className={`dept-section-card reveal reveal-delay-${(deptIndex % 3) + 1} card-color-${deptIndex + 1}`}>
                                <div className="dept-title">{deptObj.dept}</div>
                                <div className="dept-members">
                                    {deptObj.members.map((member, memberIndex) => (
                                        <div key={memberIndex} className="team-card-compact">
                                            <div className="member-name">{member.name}</div>
                                            <div className="member-spec">
                                                {member.quals.map((qual, i) => (
                                                    <div key={i}>{qual}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
