import SocialLinks from "./socialLinks";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-gray-950 via-black to-yellow-950 text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            {/* Glowing background accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#F5E0A9]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-12 py-16 border-b border-[#D4AF37]/20">
                {/* Logo & Tagline */}
                <div className="flex-1">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="h-20 w-auto object-contain"
                            priority
                        />
                        <span className="ml-2 text-2xl font-extrabold tracking-wider text-[#F5E0A9]">
                            GameChanger
                        </span>
                    </Link>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Level up your career, win big in events, and unlock global
                        opportunities — all in one place.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-6">
                        <SocialLinks />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Contact Details</h3>
                        <address className="not-italic space-y-2 text-sm">
                            <p className="text-gray-300">123 Main Street, Islamabad, Pakistan</p>
                            <a href="tel:+923001234567" className="block hover:text-[#D4AF37] transition">
                                +92 300 1234567
                            </a>
                            <a href="mailto:info@example.com" className="block hover:text-[#D4AF37] transition">
                                info@example.com
                            </a>
                        </address>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Opportunities</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/segments/jobs" className="hover:text-[#D4AF37] transition">Job in Pakistan</Link></li>
                            <li><Link href="/segments/jobs" className="hover:text-[#D4AF37] transition">Job Abroad</Link></li>
                            <li><Link href="/segments/investment-abroad" className="hover:text-[#D4AF37] transition">Invest Abroad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#F5E0A9]">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[#D4AF37] transition">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Bottom bar */}
            <div className="relative z-10 py-6 text-center">
                <p className="text-xs md:text-sm text-gray-500">
                    © {new Date().getFullYear()} GameShow. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
