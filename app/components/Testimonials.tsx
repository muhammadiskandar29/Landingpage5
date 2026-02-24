"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Andi Saputra",
        role: "Pembeli Honda Civic RS",
        text: "Prosesnya sangat transparan. Saya dikasih lihat laporan inspeksi 100 titiknya secara detail. Mobil sampai sekarang sehat walafiat. Sangat merekomendasikan AutoSwift!",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Budi Santoso",
        role: "Pembeli Toyota Fortuner",
        text: "Cari mobil bekas yang kondisinya kayak baru itu susah, tapi di sini nemu. Harganya jujur, nggak ada yang disembunyiin. Kredit juga dibantu sampai goal.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Siska Amelia",
        role: "Pembeli Mitsubishi Pajero",
        text: "Paling suka sama pelayanannya yang sat-set. Nanya lewat WA langsung dijawab, besoknya langsung test drive. Kondisi mobil beneran sesuai sama yang di foto.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-brand-dark overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 outfit">Cerita <span className="text-brand-blue">Pelanggan</span></h2>
                    <p className="text-white/60 font-light max-w-2xl mx-auto">Kepuasan pelanggan adalah bukti dedikasi kami dalam menjaga kualitas setiap unit di AutoSwift.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[32px] relative group hover:border-brand-blue/30 transition-all"
                        >
                            <div className="absolute top-6 right-8 text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors">
                                <Quote size={48} />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-brand-blue text-brand-blue" />
                                ))}
                            </div>

                            <p className="text-white/70 italic mb-8 relative z-10 font-light leading-relaxed">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue/20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{item.name}</h4>
                                    <p className="text-xs text-brand-blue">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
