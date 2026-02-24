"use client";
import Image from "next/image";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const budgets = [
    { label: "Semua Budget", value: "" },
    { label: "100jt - 200jt", value: "100-200" },
    { label: "200jt - 500jt", value: "200-500" },
    { label: "500jt +", value: "500+" },
];

interface HeroProps {
    onSearchChange: (val: string) => void;
    onBudgetChange: (val: string) => void;
    currentSearch: string;
    currentBudget: string;
}

export default function Hero({ onSearchChange, onBudgetChange, currentSearch, currentBudget }: HeroProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectedBudget = budgets.find(b => b.value === currentBudget) || budgets[0];

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
                    alt="Premium Used Car"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-brand-blue" />
                            <span className="text-brand-blue font-bold tracking-[0.2em] text-xs uppercase">
                                Automotive Excellence
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 leading-[1.1] outfit tracking-tight">
                            Mobil Pilihan, <br />
                            <span className="gradient-text italic">Tanpa Kompromi.</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
                            Lupakan kekhawatiran membeli mobil bekas. Setiap unit di AutoSwift melalui
                            kurasi ketat dan inspeksi 100+ titik oleh teknisi ahli. Garansi kepuasan 100%.
                        </p>
                    </motion.div>

                    {/* Search/Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-3 max-w-4xl shadow-2xl shadow-black/50 border-white/10 relative overflow-visible"
                    >
                        <div className="flex-1 w-full flex flex-col md:flex-row items-center gap-2 px-4">
                            <div className="flex items-center gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 py-3 md:py-2">
                                <Search className="text-brand-blue" size={20} />
                                <input
                                    type="text"
                                    value={currentSearch}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    placeholder="Cari Merk atau Model (e.g. Honda Civic)..."
                                    className="bg-transparent border-none outline-none w-full text-sm placeholder:text-white/30 text-white font-medium"
                                />
                            </div>

                            {/* Custom Dropdown */}
                            <div className="relative w-full md:w-56 py-3 md:py-0">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center justify-between w-full text-sm text-white/80 hover:text-white transition-colors px-2 font-medium"
                                >
                                    <span>{selectedBudget.label}</span>
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-4 w-full bg-brand-gray border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 backdrop-blur-xl"
                                        >
                                            {budgets.map((budget) => (
                                                <button
                                                    key={budget.value}
                                                    onClick={() => {
                                                        onBudgetChange(budget.value);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className="w-full text-left px-5 py-3.5 text-sm hover:bg-brand-blue hover:text-white transition-all border-b border-white/5 last:border-none font-medium"
                                                >
                                                    {budget.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        <a
                            href="#collection"
                            className="w-full md:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-10 py-4 md:py-5 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/30 scale-100 hover:scale-[1.02] active:scale-95"
                        >
                            Cek Koleksi
                            <ChevronRight size={18} />
                        </a>
                    </motion.div>

                    <div className="mt-16 flex flex-wrap gap-12 md:gap-20">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black outfit text-brand-blue">100+</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-1">Poin Inspeksi</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black outfit text-brand-blue">50+</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-1">Unit Ready</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black outfit text-brand-blue">24j</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mt-1">Acc Kredit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Accents */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/20 blur-[150px] -z-10 animate-pulse-soft" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-brand-blue/10 blur-[100px] -z-10" />
        </section>
    );
}
