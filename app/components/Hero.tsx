"use client";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-car.jpg"
                    alt="Premium Used Car"
                    fill
                    className="object-cover object-center brightness-[0.3]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-brand-blue/20 text-brand-blue px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 border border-brand-blue/30">
                            Kualitas Tanpa Kompromi
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight outfit">
                            Mobil Pilihan, <br />
                            <span className="gradient-text">Cerita Baru.</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/70 mb-8 md:text-xl leading-relaxed font-light">
                            Kami tidak sekadar menjual mobil bekas. Kami mengurasi unit terbaik
                            dengan inspeksi ketat agar Anda bisa melaju dengan tenang.
                            Kepuasan Anda adalah standar kami.
                        </p>
                    </motion.div>

                    {/* Search/Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 max-w-4xl"
                    >
                        <div className="flex-1 w-full flex flex-col md:flex-row items-center gap-2 px-4">
                            <div className="flex items-center gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 py-3 md:py-0">
                                <Search className="text-white/40" size={20} />
                                <input
                                    type="text"
                                    placeholder="Cari Merk atau Model..."
                                    className="bg-transparent border-none outline-none w-full text-sm"
                                />
                            </div>
                            <div className="w-full md:w-auto py-3 md:py-0">
                                <select className="bg-transparent border-none outline-none w-full text-sm text-white/60 cursor-pointer">
                                    <option value="">Semua Budget</option>
                                    <option value="100-200">100jt - 200jt</option>
                                    <option value="200-500">200jt - 500jt</option>
                                    <option value="500+">500jt +</option>
                                </select>
                            </div>
                        </div>
                        <a
                            href="#collection"
                            className="w-full md:w-auto bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all"
                        >
                            Temukan Mobil
                            <ChevronRight size={18} />
                        </a>
                    </motion.div>

                    <div className="mt-12 flex flex-wrap gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold outfit">100+</span>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Poin Inspeksi</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold outfit">50+</span>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Unit Ready</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold outfit">24j</span>
                            <span className="text-xs text-white/40 uppercase tracking-widest">Persetujuan Kredit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 blur-[120px] -z-10" />
        </section>
    );
}
