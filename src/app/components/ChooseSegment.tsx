"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, Gift, Plane, GraduationCap, Building2 } from "lucide-react";

const segments = [
    {
        slug: "game-show",
        name: "Game Show",
        description:
            "Join KPK’s biggest live game show and experience the thrill in person.",
        icon: Gamepad2,
        highlight: true, // centerpiece
        link: "/segments/game-show",
    },
    {
        slug: "lucky-draw",
        name: "Lucky Draw",
        description: "Get automatic entry into prize draws when you register.",
        icon: Gift,
        link: "/segments/lucky-draw",
    },
    {
        slug: "company-representative",
        name: "Company Representative",
        description: "Represent SGC locally or internationally.",
        icon: Building2,
        link: "/segments/company-representative",
    },
    {
        slug: "investment-abroad",
        name: "Investment / Visit Abroad",
        description: "Unlock opportunities for travel and investment.",
        icon: Plane,
        link: "/segments/investment-abroad",
    },
    {
        slug: "scholar-entrepreneur",
        name: "Scholar / Entrepreneur",
        description: "Gain access to education and entrepreneurship programs.",
        icon: GraduationCap,
        link: "/segments/scholar-entrepreneur",
    },
];

export default function ChooseSegments() {
    return (
        <section
            id="segments"
            className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white"
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Register & Unlock Opportunities
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-4 text-center text-gray-300 max-w-3xl mx-auto"
                >
                    Register for the Game Changer to participate and automatically unlock
                    exclusive benefits like lucky draws, travel, and business opportunities.
                </motion.p>

                {/* Layout */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* Left Benefits */}
                    <div className="space-y-8">
                        {segments
                            .filter(
                                (s) =>
                                    !s.highlight &&
                                    ["lucky-draw", "investment-abroad"].includes(s.slug)
                            )
                            .map((segment, idx) => {
                                const Icon = segment.icon;
                                return (
                                    <Link key={segment.slug} href={segment.link}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                            className={`p-6 bg-gradient-to-br from-[#F5E0A9]/10 via-[#D4AF37]/5 to-gray-900 
              rounded-2xl shadow-lg border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition 
              ${idx === 1 ? "mt-12" : ""}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-full bg-gradient-to-r from-[#F5E0A9]/20 to-[#D4AF37]/20">
                                                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                                                </div>
                                                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                                                    {segment.name}
                                                </h3>
                                            </div>
                                            <p className="mt-3 text-gray-300 text-sm">{segment.description}</p>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                    </div>

                    {/* Centerpiece Game Show */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 bg-gradient-to-br from-[#F5E0A9]/20 via-[#D4AF37]/10 to-gray-900 rounded-3xl shadow-xl border border-[#D4AF37]/50 text-center"
                    >
                        <Gamepad2 className="w-12 h-12 mx-auto text-[#D4AF37]" />
                        <h3 className="mt-4 text-2xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            Game Changer
                        </h3>
                        <p className="mt-3 text-gray-200 text-base">
                            The main event — register now to join KPK’s biggest live show. By
                            signing up, you automatically unlock all benefits.
                        </p>

                        <Link href="/register?segment=game-show">
                            <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl shadow-lg transition duration-300">
                                Register for Game Changer
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Benefits */}
                    <div className="space-y-8">
                        {segments
                            .filter(
                                (s) =>
                                    !s.highlight &&
                                    ["company-representative", "scholar-entrepreneur"].includes(s.slug)
                            )
                            .map((segment, idx) => {
                                const Icon = segment.icon;
                                return (
                                    <Link key={segment.slug} href={segment.link}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                            className={`p-6 bg-gradient-to-br from-[#F5E0A9]/10 via-[#D4AF37]/5 to-gray-900 
              rounded-2xl shadow-lg border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition 
              ${idx === 1 ? "mt-12" : ""}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-full bg-gradient-to-r from-[#F5E0A9]/20 to-[#D4AF37]/20">
                                                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                                                </div>
                                                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                                                    {segment.name}
                                                </h3>
                                            </div>
                                            <p className="mt-3 text-gray-300 text-sm">{segment.description}</p>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}
