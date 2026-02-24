"use client";
import { ShieldCheck, FileCheck, RefreshCcw, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <ShieldCheck size={32} className="text-brand-blue" />,
        title: "100+ Titik Inspeksi",
        desc: "Setiap unit melewati pengecekan mesin, rangka, dan elektrikal secara menyeluruh oleh tim ahli.",
    },
    {
        icon: <FileCheck size={32} className="text-brand-blue" />,
        title: "Legalitas Terjamin",
        desc: "Kami jamin keaslian dokumen BPKB, STNK, dan riwayat servis. Keamanan transaksi adalah prioritas kami.",
    },
    {
        icon: <RefreshCcw size={32} className="text-brand-blue" />,
        title: "Garansi Mesin 30 Hari",
        desc: "Berjalan dengan tenang. Kami memberikan proteksi mesin untuk menjamin kepuasan Anda pasca pembelian.",
    },
    {
        icon: <CreditCard size={32} className="text-brand-blue" />,
        title: "Solusi Pembiayaan",
        desc: "Bekerja sama dengan leasing terkemuka. Proses kredit mudah, DP rendah, dan cicilan yang bersahabat.",
    },
];

export default function TrustBar() {
    return (
        <section className="py-24 bg-brand-dark" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-8 rounded-[40px] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-brand-blue/30 transition-all duration-500 overflow-hidden shadow-2xl"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="mb-8 w-14 h-14 rounded-2xl bg-brand-blue shadow-lg shadow-brand-blue/20 flex items-center justify-center group-hover:rotate-6 transition-transform group-hover:scale-110">
                                <div className="text-white">
                                    {/* Re-rendering icons with white color for contrast on blue bg */}
                                    {idx === 0 && <ShieldCheck size={28} />}
                                    {idx === 1 && <FileCheck size={28} />}
                                    {idx === 2 && <RefreshCcw size={28} />}
                                    {idx === 3 && <CreditCard size={28} />}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 outfit tracking-tight group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
