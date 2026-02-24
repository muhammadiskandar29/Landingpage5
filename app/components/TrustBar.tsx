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
        <section className="py-24 bg-brand-dark/50" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-brand-zinc/30 border border-white/5 hover:border-brand-blue/20 transition-all group"
                        >
                            <div className="mb-6 w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 outfit">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
