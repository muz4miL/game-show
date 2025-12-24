import SocialLinks from "./socialLinks";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5E0A9]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-20">

                    {/* Company Info Section - Takes more space */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-flex items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#F5E0A9]/20 blur-xl rounded-full group-hover:bg-[#F5E0A9]/30 transition-all duration-300"></div>
                                <Image
                                    src={logo}
                                    alt="ADH Associates Logo"
                                    className="h-16 w-auto object-contain relative z-10"
                                    priority
                                />
                            </div>
                            <span className="ml-3 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent">
                                Game Changer
                            </span>
                        </Link>

                        <p className="text-base text-gray-400 leading-relaxed max-w-md">
                            Empowering careers, creating opportunities, and connecting talent with global possibilities. Your success journey starts here.
                        </p>

                        {/* Social Media - Premium Style */}
                        <div className="pt-2">
                            <p className="text-sm font-semibold text-[#F5E0A9] mb-3">Connect With Us</p>
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Opportunities
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F5E0A9] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Jobs in Pakistan", href: "/segments/jobs" },
                                { name: "Jobs Abroad", href: "/segments/jobs" },
                                { name: "Invest Abroad", href: "/segments/investment-abroad" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#F5E0A9] transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Company
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F5E0A9] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" },
                                { name: "Privacy Policy", href: "/privacy" },
                                { name: "Terms of Service", href: "/terms" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#F5E0A9] transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information - Enhanced */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Get In Touch
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F5E0A9] to-transparent"></div>
                        </h3>
                        <address className="not-italic space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 p-2 rounded-lg bg-[#F5E0A9]/10 group-hover:bg-[#F5E0A9]/20 transition-all duration-300">
                                    <MapPin className="w-4 h-4 text-[#F5E0A9]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Suit # 01, First Floor<br />
                                        Burj Al Bilal Plaza<br />
                                        Jinnah Avenue, Margallah Enclave DHA/CDA<br />
                                        Main Double Road, Islamabad
                                    </p>
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 p-2 rounded-lg bg-[#F5E0A9]/10 group-hover:bg-[#F5E0A9]/20 transition-all duration-300">
                                    <Phone className="w-4 h-4 text-[#F5E0A9]" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <a href="tel:+923005885527" className="block text-sm text-gray-400 hover:text-[#F5E0A9] transition-colors duration-300">
                                        +92 300 5885527
                                    </a>
                                    <a href="tel:+923055833371" className="block text-sm text-gray-400 hover:text-[#F5E0A9] transition-colors duration-300">
                                        +92 305 5833371
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3 group">
                                <div className="mt-1 p-2 rounded-lg bg-[#F5E0A9]/10 group-hover:bg-[#F5E0A9]/20 transition-all duration-300">
                                    <Mail className="w-4 h-4 text-[#F5E0A9]" />
                                </div>
                                <div className="flex-1">
                                    <a href="mailto:aamrae2022@gmail.com" className="block text-sm text-gray-400 hover:text-[#F5E0A9] transition-colors duration-300 break-all">
                                        aamrae2022@gmail.com
                                    </a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} <span className="text-[#F5E0A9] font-semibold">Game Changer</span>. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <span>Crafted with</span>
                            <span className="text-[#D4AF37] animate-pulse">♦</span>
                            <span>in Islamabad</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
