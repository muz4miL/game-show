"use client";

import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import Image from "next/image";
import finalbgimage from "../assets/finalbg-image.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white overflow-hidden pt-20 md:pt-0">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="text-left space-y-6 relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
                    >
                        <span className="whitespace-nowrap bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                            Participate in KPK’s Biggest
                        </span>
                        <span className="block text-white">Game Changer</span>
                    </motion.h1>





                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-300 max-w-lg relative z-20"
                    >
                        Register now to participate in the{" "}
                        <span className="bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md font-semibold">
                            Lucky Draw
                        </span>{" "}
                        and unlock amazing prizes. <br /> Your chance to win, explore
                        opportunities, and take part in exciting events.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <Link href="/register?segment=lucky-draw">
                            <Button className="bg-yellow-500 cursor-pointer text-black hover:bg-yellow-400 shadow-lg">
                                Register for Lucky Draw
                            </Button>
                        </Link>

                        {/* Discount Line */}
                        <p className="text-sm md:text-base font-medium text-yellow-400 drop-shadow-md">
                            Early birds get an exclusive{" "}
                            <span className="font-bold text-white">20% discount</span>!
                        </p>

                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="grid grid-cols-3 gap-6 pt-8"
                    >
                        <div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                                1000+
                            </h3>
                            <p className="text-gray-300">Participants</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                                14
                            </h3>
                            <p className="text-gray-300">Segments</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
                                24/7
                            </h3>
                            <p className="text-gray-300">Support</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center md:justify-end mt-10 md:mt-0 -ml-16 relative z-10"
                >
                    <Image
                        src={finalbgimage}
                        alt="Hero Person"
                        className="w-auto max-h-[650px] md:max-h-[700px] object-contain drop-shadow-2xl"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
