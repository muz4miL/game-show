"use client";

import Link from "next/link";
import Button from "./Button";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// --- COUNTER COMPONENT ---
const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: duration, ease: "easeOut" });
        return controls.stop;
    }, [count, to, duration]);

    return <motion.span>{rounded}</motion.span>;
};

export default function Hero() {
    return (
        <section
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/bg2.png')",
            }}
        >
            {/* --- LAYERS --- */}

            {/* 1. Darker Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-0"></div>

            {/* 2. Spotlights */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-500/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* --- CONTENT GRID --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full items-center">

                {/* LEFT: TEXT CONTENT - Vertically Centered */}
                <div className="flex flex-col justify-center h-full pb-20 lg:pb-0 z-20">

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-3"
                        >
                            {/* Subtle Lead-in Text */}
                            <span className="block text-lg md:text-xl text-gray-300/80 tracking-widest font-light uppercase">
                                Participate in KPK's Biggest
                            </span>

                            {/* HERO TEXT - GOLD - The Focal Point */}
                            <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#F9F295] bg-clip-text text-transparent drop-shadow-2xl">
                                Game Changer
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300/90 max-w-lg leading-relaxed font-light"
                        >
                            Register now for automatic <span className="text-[#E0AA3E] font-semibold">Lucky Draw Entry</span>.
                            Unlock prizes, opportunities, and exclusive access.
                        </motion.p>
                    </div>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8"
                    >
                        <Link href="/register" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E0AA3E] to-[#B8860B] text-black text-base font-bold rounded-xl shadow-[0_0_20px_rgba(224,170,62,0.4)] hover:shadow-[0_0_40px_rgba(224,170,62,0.6)] hover:scale-105 transition-all duration-300">
                                Register Now
                            </Button>
                        </Link>

                        <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-yellow-100/90 font-medium">
                                Free Entry in Lucky Draw
                            </span>
                        </div>
                    </motion.div>

                    {/* STATS - More Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/10 max-w-md"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F9F295] flex items-center">
                                <AnimatedCounter from={0} to={2000} />+
                            </h3>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Participants</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F9F295] flex items-center">
                                <AnimatedCounter from={0} to={14} />
                            </h3>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Segments</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F9F295]">24/7</h3>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Support</p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: HERO IMAGE - Maximized for Impact */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:block relative h-[90vh] w-full z-10"
                >
                    {/* Backlight for visual separation */}
                    <div className="absolute bottom-0 right-0 w-full h-[70%] bg-gradient-to-t from-[#E0AA3E]/20 to-transparent blur-3xl rounded-full -z-10"></div>

                    {/* The Hero Image - Tall, Commanding, Anchored Bottom */}
                    <Image
                        src="/gul-panra.png"
                        alt="Brand Ambassador"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                        sizes="50vw"
                    />
                </motion.div>

                {/* MOBILE IMAGE (Only visible on small screens) */}
                <div className="lg:hidden absolute bottom-0 right-[-20%] w-[80%] h-[50vh] z-0 opacity-40">
                    <Image
                        src="/gul-panra.png"
                        alt="Brand Ambassador"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                    />
                </div>

            </div>

            {/* Cinematic Floor Fade - Hides Image Cut-off */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none z-20"></div>
        </section>
    );
}