"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Award, Crown } from "lucide-react";

const levels = [
    {
        name: "Silver Level",
        requirement: "Refer 10 Friends",
        benefits: [
            "Exclusive Silver Badge",
            "1 Extra Lucky Draw Entry",
            "Priority Seating in Events",
        ],
        icon: Users,
        color: "from-gray-500/30 to-gray-800/50",
    },
    {
        name: "Gold Level",
        requirement: "Refer 20 Friends",
        benefits: [
            "All Silver Benefits",
            "3 Extra Lucky Draw Entries",
            "Special Shout-out on Stage",
        ],
        icon: Award,
        color: "from-yellow-400/30 to-yellow-800/50",
    },
    {
        name: "Platinum Level",
        requirement: "Refer 30 Friends",
        benefits: [
            "All Gold Benefits",
            "VIP Access at the Game Show",
            "Meet & Greet with Hosts",
        ],
        icon: Crown,
        color: "from-purple-500/30 to-purple-900/50",
    },
];

export default function GameShowLevels() {
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
                    Game Changer Referral Levels
                </motion.h2>

                <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
                    Invite your friends to the Game Changer! The more people you bring, the
                    higher your level and the more chances you get to win big.
                </p>

                {/* Cards Grid */}
       {/* Cards Grid */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
  {levels.map((level, idx) => (
    <motion.div
      key={level.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-500 group transform hover:scale-105"
    >
      {/* Background Image / Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${level.color} opacity-60`}
      ></div>

      {/* Bottom overlay */}
      <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-t-3xl p-8 pt-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-2 drop-shadow-md text-center">
          {level.name}
        </h3>
        <p className="text-gray-200 text-center font-medium mb-4">
          {level.requirement}
        </p>

        <ul className="text-gray-200 text-sm sm:text-base space-y-2 max-h-48 overflow-y-auto pr-2">
          {level.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-yellow-400">✔</span> {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center">
          <Link href="/registerSegment" className="w-full">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  ))}
</div>

            </div>
        </section>
    );
}
