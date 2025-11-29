"use client";

import { Briefcase, FileText, TrendingUp, CheckCircle2, HeartPulse, Star } from "lucide-react";
import Link from "next/link";

export default function Benefits() {
    const benefits = [
        {
            title: "Send Your CV",
            description:
                "Submit your resume and get matched with the perfect opportunities that align with your skills and experience.",
            icon: FileText,
        },
        {
            title: "Discuss Investment Proposals",
            description:
                "Connect with investors and explore business opportunities that can help you grow financially.",
            icon: TrendingUp,
        },
        {
            title: "Get Maximum Benefits",
            description:
                "Unlock exclusive access to career advancement, investment opportunities, and life-changing experiences.",
            icon: Briefcase,
        },
    ];

    const sehatCardBenefits = [
        "Hospital Discounts with Unique Code",
        "One-time Purchase: Rs 5000 Only",
        "Free Health Consultation at Partner Hospitals",
        "Priority Access to Health Services",
        "Valid Across Multiple Clinics & Hospitals",
    ];

    return (
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-6 
                    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Maximum Benefits Await You
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
                    Send your CV, Discuss Investment Proposals, Get Maximum Benefits
                </p>

                {/* Regular Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 
                            border border-[#D4AF37]/40 hover:border-[#D4AF37] 
                            transition-all duration-300 
                            hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                        >
                            <div className="flex justify-center mb-6">
                                <item.icon className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3
                                className="text-xl font-semibold mb-3
                                bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent"
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                
                {/* What You'll Get Section */}
                <h3
                    className="text-2xl md:text-3xl font-bold mb-8
                    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent"
                >
                    What You'll Get
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto text-left">
                    {[
                        "Direct access to top employers and recruiters",
                        "Investment guidance from industry experts",
                        "Networking opportunities with successful entrepreneurs",
                        "Career counseling and mentorship programs",
                        "International job placement assistance",
                        "Business development workshops and seminars",
                        "Exclusive investment opportunities",
                        "24/7 support and guidance throughout your journey",
                    ].map((perk, idx) => (
                        <li
                            key={idx}
                            className="flex items-start space-x-3 bg-gray-900/50 p-4 rounded-xl 
                            border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition"
                        >
                            <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                            <span className="text-gray-300">{perk}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
