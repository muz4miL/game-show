"use client";

import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import Image from "next/image";
import finalbgimage from "../assets/finalbg-image.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-yellow-900 text-white overflow-hidden pt-28 md:pt-20">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            {/* Floating Golden Glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-600/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">

                    {/* TITLE */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
                    >
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            Participate in KPK’s Biggest
                        </span>

                        <span className="block text-white mt-1">Game Changer</span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
                    >
                        Register now and enjoy free benefits— including automatic{" "}
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent font-semibold">
                            Lucky Draw Entry
                        </span>
                        . Unlock prizes, opportunities, and exclusive access to events.
                    </motion.p>

                    {/* BUTTON + OFFER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <Link href="/register" className="w-full sm:w-auto">
                            <Button className="bg-yellow-500 cursor-pointer text-black hover:bg-yellow-400 shadow-xl w-full">
                                Register Now
                            </Button>
                        </Link>

                        <p className="text-sm md:text-base font-medium text-yellow-300">
                            <span className="font-bold text-white">Free Entry</span> in Lucky Draw!
                        </p>
                    </motion.div>

                    {/* STATS SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="grid grid-cols-3 gap-6 pt-8 max-w-xs sm:max-w-sm"
                    >
                        {[
                            { number: "1000+", label: "Participants" },
                            { number: "14", label: "Segments" },
                            { number: "24/7", label: "Support" },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                                    {item.number}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">{item.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center md:justify-end w-full"
                >
                    <div className="relative">
                        <Image
                            src={finalbgimage}
                            alt="Hero Image"
                            className="w-64 sm:w-80 md:w-[450px] lg:w-[550px] object-contain drop-shadow-2xl"
                            priority
                        />

                        {/* Soft gold glow behind the image */}
                        <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
