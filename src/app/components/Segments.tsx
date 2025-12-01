"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const levels = [
  {
    name: "Stylish Segment",
    benefits: ["Fashion", "Singing", "Dramas", "Theatre Show", "Lucky Draw Entry"],
    image: "/images/segments-stylish.jpg", // replace with your image
  },
  {
    name: "Jobs Segment",
    benefits: ["General Managers", "Managers", "Executives", "Broakership", "Lucky Draw Entry"],
    image: "/images/segments-job.jpg",
  },
  {
    name: "Professional Segment",
    benefits: ["Entrepreneurship", "Networking", "Financial Services", "Advisories and Trainings", "Lucky Draw Entry"],
    image: "/images/segments-professional.jpg",
  },
];

export default function Segments() {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
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
          Register in any segment and enjoy exclusive benefits, including a guaranteed Lucky Draw entry!
        </p>
{/* Cards Grid */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {levels.map((level, idx) => (
    <motion.div
      key={level.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-500 group transform hover:scale-105 bg-gray-900 border border-yellow-500/30"
    >
      {/* Top Image */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
        <Image
          src={level.image}
          alt={level.name}
          fill
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient fade overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Bottom Content */}
      <div className="p-6 flex flex-col justify-between min-h-[300px]">
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 drop-shadow-md">
          {level.name}
        </h3>

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
