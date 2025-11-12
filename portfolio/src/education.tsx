"use client";
import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            school: "Chuka University",
            degree: "BSc. Computer Science",
            year: "2023 – Present",
            details:
                "Studying advanced software engineering, data structures, algorithms, and database management. Participating in coding competitions and tech clubs.",
            color: "#6366f1",
        },
        {
            school: "Kinungi High School",
            degree: "KCSE",
            year: "2019 – 2022",
            details:
                "Excelled in mathematics, physics, and computer studies. Served as ICT club secretary and participated in science fairs.",
            color: "#22d3ee",
        },
        {
            school: "Nyamathi Primary School",
            degree: "KCPE",
            year: "2016 – 2018",
            details:
                "Achieved top marks in science and English. Developed leadership skills as class prefect.",
            color: "#f59e42",
        },
    ];

    return (
        <section
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #173a53 60%, #2563eb 100%)",
                padding: "4rem 1.5rem",
                fontFamily: "Inter, Arial, sans-serif",
            }}
        >
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: "2.75rem",
                        fontWeight: 800,
                        textAlign: "center",
                        marginBottom: "2.5rem",
                        color: "#fff",
                        letterSpacing: "1px",
                        textShadow: "0 2px 8px #173a53",
                    }}
                >
                    My Education
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        textAlign: "center",
                        color: "#cbd5e1",
                        fontSize: "1.15rem",
                        marginBottom: "3rem",
                        maxWidth: "600px",
                        margin: "0 auto 3rem auto",
                    }}
                >
                    A journey of learning, growth, and discovery. Here’s a summary of my academic background and achievements.
                </motion.p>

                <div
                    style={{
                        position: "relative",
                        borderLeft: "4px solid #3b82f6",
                        paddingLeft: "2rem",
                    }}
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3, duration: 0.8 }}
                            style={{
                                marginBottom: "2.5rem",
                                position: "relative",
                                display: "flex",
                                alignItems: "flex-start",
                            }}
                        >
                            {/* Dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "-38px",
                                    top: "18px",
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                    background: `radial-gradient(circle at 60% 40%, ${edu.color} 70%, #fff 100%)`,
                                    border: "4px solid #fff",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                                    zIndex: 2,
                                }}
                            ></div>

                            {/* Card */}
                            <motion.div
                                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(27, 41, 53, 0.22)" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                style={{
                                    background: "rgba(255,255,255,0.97)",
                                    padding: "1.5rem 2rem",
                                    borderRadius: "16px",
                                    boxShadow: "0 4px 24px rgba(27, 41, 53, 0.13)",
                                    borderLeft: `6px solid ${edu.color}`,
                                    width: "100%",
                                    cursor: "pointer",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.45rem",
                                        fontWeight: 700,
                                        color: "#173a53",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {edu.school}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: 500,
                                        color: "#2563eb",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {edu.degree}
                                </p>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: "0.95rem",
                                        color: "#64748b",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {edu.year}
                                </span>
                                <p style={{ color: "#334155", fontSize: "1rem" }}>{edu.details}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
