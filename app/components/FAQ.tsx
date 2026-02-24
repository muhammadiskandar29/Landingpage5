"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Apakah mobil yang dijual di AutoSwift bergaransi?",
        a: "Ya, semua unit di AutoSwift mendapatkan garansi mesin dan transmisi selama 30 hari atau 1.000 KM pertama (mana yang tercapai lebih dulu) untuk menjamin ketenangan Anda berkendara.",
    },
    {
        q: "Bagaimana proses pengecekan atau inspeksi mobil?",
        a: "Kami melakukan inspeksi menyeluruh pada 100+ titik yang meliputi sektor mesin, transmisi, sistem pengereman, kaki-kaki, hingga keaslian rangka untuk memastikan mobil bukan bekas tabrak besar atau banjir.",
    },
    {
        q: "Apakah bisa melakukan tukar tambah (Trade-in)?",
        a: "Sangat bisa! Kami menerima tukar tambah dengan segala merk dan tahun. Mobil lama Anda akan kami hargai secara kompetitif sesuai kondisi pasar saat ini.",
    },
    {
        q: "Apa saja dokumen yang didapatkan saat pembelian?",
        a: "Setiap pembelian akan disertai dengan BPKB asli, STNK asli, faktur pembelian, kuitansi bermaterai, serta sertifikat hasil inspeksi resmi dari AutoSwift.",
    },
];

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-brand-dark" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 outfit">Informasi <span className="text-brand-blue">Penting</span></h2>
                    <p className="text-white/60 font-light">Segala informasi yang Anda butuhkan sebelum menentukan pilihan.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 ${openIdx === idx ? "border-brand-blue bg-brand-zinc/50 shadow-lg shadow-brand-blue/5" : "border-white/10 hover:border-white/20"
                                }`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span className="font-bold text-lg">{faq.q}</span>
                                {openIdx === idx ? (
                                    <Minus size={20} className="text-brand-blue" />
                                ) : (
                                    <Plus size={20} className="text-white/40" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/60 font-light leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
