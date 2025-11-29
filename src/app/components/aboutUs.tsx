"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../assets/aboutimage.jpeg";

export default function AboutPage() {
    return (
        <main className="bg-gradient-to-br from-gray-900 via-black to-yellow-950 text-white min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-3xl px-6"
                >
                    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            About Shamroz Group of Companies
                        </span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300">
                        Building a legacy of trust, growth, and innovation since 1971
                    </p>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="relative py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start"
                >
                    <Image
                        src={aboutImage}
                        alt="SGC Shamroz Group of Companies"
                        className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            Who We Are
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        The{" "}
                        <span className="font-semibold text-yellow-400">
                            Shamroz Group of Companies (SGC)
                        </span>{" "}
                        has been a cornerstone of innovation and community development since{" "}
                        <span className="font-bold text-white">1971</span>. With over five
                        decades of trust, vision, and progress, SGC continues to expand its
                        legacy across multiple industries.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed">
                        As the proud parent company of this game show, SGC brings unmatched
                        expertise in organizing impactful initiatives, fostering growth, and
                        creating meaningful experiences that connect people and inspire
                        communities.
                    </p>
                </motion.div>
            </section>

            {/* Timeline / Legacy */}
            <section className="relative py-24 bg-black/40">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        Our <span className="text-yellow-400">Journey</span>
                    </motion.h2>

                    <div className="space-y-12 relative border-l-2 border-yellow-500/30 pl-8">
                        {[
                            {
                                year: "1971",
                                text: "Foundation of Shamroz Group of Companies with a vision for progress.",
                            },
                            {
                                year: "1985",
                                text: "Expansion into multiple industries, earning trust nationwide.",
                            },
                            {
                                year: "2000",
                                text: "Adoption of modern practices and global partnerships.",
                            },
                            {
                                year: "2023",
                                text: "Parent company of this Game Changer, inspiring communities worldwide.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <span className="absolute -left-12 top-0 text-xl font-bold text-yellow-400">
                                    {item.year}
                                </span>
                                <p className="text-gray-300">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto px-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join the <span className="text-yellow-400">SGC Family</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Be a part of our journey of innovation, growth, and impact. Together,
                        we shape the future.
                    </p>
                    <a
                        href="/register"
                        className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Get Started
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
