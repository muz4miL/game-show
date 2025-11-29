"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, Crown, MicVocal, BriefcaseBusiness,  HandCoins } from "lucide-react";

const levels = [
    {
        name: "Stylish Segment",
        benefits: [
            "Fashion ",
            "Singing",
            "Dramas",
            "Theatre Show",
            "Lucky Draw Entry",
        ],
        icon: MicVocal,
        color: "from-purple-500/30 to-gray-800/50",
    },
    {
        name: "Jobs Segment",
        
        benefits: [
            "General Managers",
            "Managers",
            "Executives",
            "Broakership",
            "Lucky Draw Entry",
        ],
        icon: BriefcaseBusiness,
        color: "from-blue-400/30 to-green-800/50",
    },
    {
        name: "Professional Segment",
        
        benefits: [
            "Entrepreneurship",
            "Networking",
            "Financial services",
            "Advisories and Trainings",
            "Lucky Draw Entry",
        ],
        icon:  HandCoins,
        color: "from-green-400/30 to-yellow-400/20",
    },
];

export default function Segments() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-yellow-950 text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Game Changer Main Segments
                </motion.h2>

                <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
                    Register now in any of the segments and enjoy exclusive free benefits — including a guaranteed entry into our Lucky Draw!
                </p>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {levels.map((level, idx) => {
                        const Icon = level.icon;
                        return (
                            <motion.div
                                key={level.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`p-8 rounded-2xl shadow-xl border border-yellow-500/30 
                bg-gradient-to-br ${level.color} hover:border-yellow-400 transition`}
                            >
                                <div className="flex justify-center">
                                    <div className="p-4 rounded-full bg-yellow-600/20">
                                        <Icon className="w-10 h-10 text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-center text-yellow-300">
                                    {level.name}
                                </h3>
                               
                                <ul className="mt-6 space-y-2 text-gray-300 font-bold text-sm">
                                    {level.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-yellow-400 ">✔</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex justify-center">
                                    <Link href="/registerSegment">
                                        <button className="px-6 py-3 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
                      text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 
                      transition-transform duration-300">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
