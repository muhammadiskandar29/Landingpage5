"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Koleksi Mobil", href: "#collection" },
        { name: "Tentang Kami", href: "#about" },
        { name: "Cara Beli", href: "#how-to" },
        { name: "Testimoni", href: "#testimonials" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-brand-blue p-1.5 sm:p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Car className="text-white" size={20} />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold tracking-tighter outfit">
                        AutoSwift<span className="text-brand-blue">.id</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-brand-blue transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6281234567890"
                        className="flex items-center gap-2 bg-white text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105"
                    >
                        <Phone size={16} />
                        Hubungi Kami
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6281234567890"
                        className="flex items-center justify-center gap-2 bg-brand-blue text-white py-4 rounded-xl font-bold"
                    >
                        <Phone size={20} />
                        Hubungi Kami Sekarang
                    </a>
                </div>
            )}
        </nav>
    );
}
