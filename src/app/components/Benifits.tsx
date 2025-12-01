"use client";

import {
    Briefcase,
    FileText,
    TrendingUp,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Benefits() {
    const benefits = [
        {
            title: "Send Your CV",
            description: "Submit your resume and get matched with the perfect opportunities that align with your skills.",
            icon: FileText,
            image: "/images/benifits-cv.jpg",
        },
        {
            title: "Discuss Investment Proposals",
            description: "Connect with investors and explore high-growth business opportunities.",
            icon: TrendingUp,
            image: "/images/benifits-discussInvestment.webp",
        },
        {
            title: "Get Maximum Benefits",
            description: "Unlock exclusive access to career advancement, investment opportunities, and life-changing experiences.",
            icon: Briefcase,
            image: "/images/benifits-maximum.jpeg",
        },
    ];

    const perks = [
        "Direct access to top employers and recruiters",
        "Investment guidance from industry experts",
        "Networking opportunities with successful entrepreneurs",
        "Career counseling and mentorship programs",
        "International job placement assistance",
        "Business development workshops and seminars",
        "Exclusive investment opportunities",
        "24/7 support and guidance throughout your journey",
    ];

    return (
        <section className="relative bg-black py-20 px-6 sm:px-12 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-transparent to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl">
                        Maximum Benefits Await You
                    </h2>
                    <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                        Grow your career, explore investment opportunities, and unlock elite advantages.
                    </p>
                </div>

                {/* Benefit Cards
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {benefits.map((item, index) => (
    <div
      key={index}
      className="group relative rounded-3xl overflow-hidden bg-gray-900/80 
      backdrop-blur-xl border border-[#D4AF37]/30 
      hover:border-[#D4AF37] transition-all duration-500 
      hover:shadow-[0_0_45px_rgba(212,175,55,0.4)] hover:-translate-y-2"
    >
      {/* Image }
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay }
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Content }
      <div className="p-7 relative z-10">

        {/* Icon inside golden circle }
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8A6F2B] flex items-center justify-center shadow-lg shadow-[#D4AF37]/40 mb-5 group-hover:scale-110 transition duration-300">
          <item.icon className="w-7 h-7 text-black" />
        </div>

        <h3 className="text-xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent mb-3">
          {item.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div> */}

                    {/* Benefit Cards */}
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {benefits.map((item, index) => (
    <div
      key={index}
      className="relative rounded-3xl overflow-hidden shadow-lg 
      hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-500"
    >
      {/* Full Image */}
      <div className="relative h-80 sm:h-96 lg:h-[28rem] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent mb-2">
            {item.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


                {/* Perks Section */}
                <div className="mt-24">
                    <h3 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent mb-10">
                        What You Will Get
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-5 bg-gray-900/70 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition"
                            >
                                <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                                <span className="text-gray-300 text-sm md:text-base">{perk}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
