"use client";
import { motion } from "framer-motion";
import { MousePointerClick, CalendarDays, KeyRound } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CarListing from "./components/CarListing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const howToSteps = [
  {
    icon: <MousePointerClick size={32} className="text-brand-blue" />,
    title: "Pilih Unit",
    desc: "Jelajahi koleksi kami yang telah diinspeksi. Temukan unit yang sesuai dengan kebutuhan dan budget Anda.",
  },
  {
    icon: <CalendarDays size={32} className="text-brand-blue" />,
    title: "Atur Jadwal",
    desc: "Hubungi tim kami untuk mengatur jadwal inspeksi langsung atau test drive di showroom kami (Bursa Sunter).",
  },
  {
    icon: <KeyRound size={32} className="text-brand-blue" />,
    title: "Terima Kunci",
    desc: "Proses transaksi transparan. Dokumen dikirim, unit disiapkan, dan Anda siap melaju dengan mobil baru.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <TrustBar />
      <CarListing />

      {/* How To Buy Section */}
      <section className="py-16 md:py-24 bg-brand-gray/50" id="how-to">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 outfit">Proses <span className="text-brand-blue">Mudah</span></h2>
            <p className="text-white/60 font-light text-sm md:text-base px-4">Langkah sederhana menuju kepemilikan mobil impian Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10 translate-y-[-50px]" />

            {howToSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-dark border-4 border-brand-zinc mb-6 flex items-center justify-center group-hover:border-brand-blue transition-colors relative">
                  <span className="absolute -top-3 -left-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shadow-lg">0{idx + 1}</span>
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 outfit">{step.title}</h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-light max-w-xs px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Sell CTA */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass p-8 md:p-20 rounded-[30px] md:rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-700" />
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 outfit max-w-4xl mx-auto leading-tight">
              Ingin Berdiskusi Soal Mobil <br className="hidden md:block" /> <span className="text-brand-blue">Impian Anda?</span>
            </h2>
            <p className="text-white/60 mb-8 md:text-lg font-light max-w-2xl mx-auto text-sm md:text-base">
              Konsultasikan kebutuhan Anda bersama tim ahli kami. Kami akan membantu mencarikan
              unit terbaik yang sesuai dengan profil dan gaya hidup Anda.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href="https://wa.me/6281234567890"
                className="w-full md:w-auto bg-brand-blue text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-brand-blue/80 transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3"
              >
                Chat WhatsApp Sekarang
              </a>
              <a
                href="tel:+622188997766"
                className="w-full md:w-auto text-white/60 hover:text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg border border-white/10 hover:border-white transition-all flex items-center justify-center gap-3"
              >
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
