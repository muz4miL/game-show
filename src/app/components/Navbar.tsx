"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {

                setShow(false);
            } else {

                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 text-gray-200 h-20 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="h-20 w-auto object-contain"
                        priority
                    />
                    <span className="ml-2 text-2xl font-extrabold tracking-wider text-[#F5E0A9]">
                        ADH Associates
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 font-medium">
                    {/* <Link href="/segments/jobs" className="hover:text-yellow-400 transition">
                        Jobs
                    </Link> */}
                    <Link href="/" className="hover:text-yellow-400 transition">
                        Home
                    </Link>
                    <Link href="/#segments" className="hover:text-yellow-400 transition">
                        Segments
                    </Link>


                    <Link href="/segments/company-representative" className="hover:text-yellow-400 transition">
                        Representative
                    </Link>

                    <Link href="/about" className="hover:text-yellow-400 transition">
                        About Us
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-400 transition">
                        Contact Us
                    </Link>

                </div>

                {/* Register Now Button */}
                <div className="hidden md:block">
                    <Link href="/register">
                        <Button className="bg-yellow-400 text-black px-5 cursor-pointer py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                            Become a representative
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none text-yellow-400 text-2xl"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col bg-gray-900 px-6 py-4 gap-4 border-t border-yellow-500/30">
                    <Link href="/" className="hover:text-yellow-400" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                    <Link href="/segments/jobs" className="hover:text-yellow-400" onClick={() => setOpen(false)}>
                        Jobs
                    </Link>
                    <Link href="/segments/company-representative" className="hover:text-yellow-400" onClick={() => setOpen(false)}>
                        Representative
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-400" onClick={() => setOpen(false)}>
                        Contact Us
                    </Link>
                    <Link href="/#segments" className="hover:text-yellow-400" onClick={() => setOpen(false)}>
                        Segments
                    </Link>
                    <Link href="/register" onClick={() => setOpen(false)}>
                        <Button className="w-full bg-yellow-400 text-black rounded-lg hover:bg-yellow-300">
                            Register Now
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
