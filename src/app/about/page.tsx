"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../assets/aboutimage.jpeg";

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen overflow-hidden relative">
            {/* Background gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-20 md:py-28 flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-4xl px-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-lg">
                            About Shamroz Group of Companies
                        </span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Building a legacy of trust, growth, and innovation since 1971
                    </p>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="relative z-10 py-14 md:py-20 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Image */}
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
                            className="rounded-3xl shadow-2xl shadow-yellow-500/20 w-full max-w-lg object-cover ring-2 ring-yellow-500/50"
                            priority
                        />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                                Who We Are
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            The <span className="font-semibold text-yellow-400">Shamroz Group of Companies (SGC)</span> has been a cornerstone of innovation and community development since <span className="font-bold text-white">1971</span>. With over five decades of trust, vision, and progress, SGC continues to expand its legacy across multiple industries.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            As the proud parent company of this game show, SGC brings unmatched expertise in organizing impactful initiatives, fostering growth, and creating meaningful experiences that connect people and inspire communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline / Legacy */}
            <section className="relative z-10 py-16 md:py-20 bg-black/40">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        Our <span className="text-yellow-400">Journey</span>
                    </motion.h2>

                    <div className="space-y-10 relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-yellow-500/30"></div>

                        {[
                            { year: "1971", text: "Foundation of Shamroz Group of Companies with a vision for progress." },
                            { year: "1985", text: "Expansion into multiple industries, earning trust nationwide." },
                            { year: "2000", text: "Adoption of modern practices and global partnerships." },
                            { year: "2023", text: "Parent company of this Game Changer, inspiring communities worldwide." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex items-center justify-center"
                            >
                                {/* Circle */}
                                <div className="absolute z-10 w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>

                                {/* Content */}
                                <div className={`w-full max-w-[26rem] px-6 py-4 rounded-lg backdrop-blur-sm bg-white/5 ${i % 2 === 0 ? 'md:pr-14 md:ml-auto text-right' : 'md:pl-14 md:mr-auto'}`}>
                                    <span className="block text-lg font-bold text-yellow-400 mb-1">
                                        {item.year}
                                    </span>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-16 md:py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto px-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Join the <span className="text-yellow-400">SGC Family</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                        Be a part of our journey of innovation, growth, and impact. Together, we shape the future.
                    </p>
                    <a
                        href="/register"
                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    >
                        Get Started
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
