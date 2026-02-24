"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fuel, Gauge, Settings, ChevronRight, MessageCircle, CheckCircle2, XCircle, Plus } from "lucide-react";

interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: string;
    image: string;
    km: string;
    fuel: string;
    transmission: string;
    type: string;
    status: string;
    label: string;
    plus: string[];
    minus: string[];
}

const cars: Car[] = [
    {
        id: 1,
        brand: "Honda",
        model: "Civic RS Turbo",
        year: 2021,
        price: "Rp 485.000.000",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800&auto=format&fit=crop",
        km: "24.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Sedan",
        status: "Fresh",
        label: "Baru Masuk",
        plus: ["Jok sudah full kulit premium", "Mesin turbo sangat responsif", "Service record bengkel resmi"],
        minus: ["Ban depan mulai tipis", "Ada baret halus di bemper belakang"]
    },
    {
        id: 2,
        brand: "Toyota",
        model: "Fortuner 2.8 VRZ",
        year: 2022,
        price: "Rp 565.000.000",
        image: "/images/car-2.jpg",
        km: "12.000 KM",
        fuel: "Diesel",
        transmission: "AT",
        type: "SUV",
        status: "Trending",
        label: "Banyak Dilihat",
        plus: ["Body full original mulus", "Kaca film V-Kool 80%", "Interior wangi mobil baru"],
        minus: ["Pajak mepet bulan depan", "Sedikit noda di plafon"]
    },
    {
        id: 3,
        brand: "BMW",
        model: "320i Sport",
        year: 2019,
        price: "Rp 620.000.000",
        image: "/images/car-3.jpg",
        km: "45.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Sedan",
        status: "Sold",
        label: "TERJUAL",
        plus: ["Kaki-kaki senyap total", "Fitur iDrive sudah update", "Audio Harman Kardon"],
        minus: ["No minus, unit istimewa"]
    },
    {
        id: 4,
        brand: "Mitsubishi",
        model: "Pajero Sport Dakar",
        year: 2020,
        price: "Rp 495.000.000",
        image: "/images/car-4.jpg",
        km: "38.000 KM",
        fuel: "Diesel",
        transmission: "AT",
        type: "SUV",
        status: "Ready",
        label: "Unit Terbatas",
        plus: ["Sunroof berfungsi normal", "Modul rem ABS baru ganti", "Foglamp LED"],
        minus: ["Karpet dasar perlu dibersihkan", "Remote kunci cadangan hilang"]
    },
    {
        id: 5,
        brand: "Toyota",
        model: "Alphard SC Premium",
        year: 2021,
        price: "Rp 1.150.000.000",
        image: "/images/astra-black.png",
        km: "15.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "MPV",
        status: "Exclusive",
        label: "Unit Premium",
        plus: ["Pilot seat full elektrik", "Power back door lancar", "Gorden interior mewah"],
        minus: ["Konsumsi BBM lumayan boros", "Ada sedikit dent di pintu samping"]
    },
    {
        id: 6,
        brand: "Honda",
        model: "HR-V RS Turbo",
        year: 2023,
        price: "Rp 435.000.000",
        image: "/images/corsa-red.png",
        km: "5.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Hatchback",
        status: "Fresh",
        label: "Mint Condition",
        plus: ["Warna merah favorit", "Kamera 360 derajat", "Smart key entry"],
        minus: ["Sudah service pertama", "Ada baret halus di handle pintu"]
    },
    {
        id: 7,
        brand: "Hyundai",
        model: "IONIQ 5 Signature",
        year: 2022,
        price: "Rp 745.000.000",
        image: "/images/mokka-blue.png",
        km: "8.000 KM",
        fuel: "Listrik",
        transmission: "AT",
        type: "Hatchback",
        status: "Trending",
        label: "Bebas Ganjil Genap",
        plus: ["Bebas ganjil genap", "Fast charging normal", "Cat original 100%"],
        minus: ["Kabel portable charger tidak ada", "Warna kurang favorit"]
    },
    {
        id: 8,
        brand: "Mazda",
        model: "CX-5 Elite",
        year: 2020,
        price: "Rp 465.000.000",
        image: "/images/insignia-grey.png",
        km: "32.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "SUV",
        status: "Ready",
        label: "Best Seller",
        plus: ["Audio Bose Premium", "Heads up display", "Adaptive LED Headlights"],
        minus: ["Ban belakang gundul sebelah", "Pajak mati 1 bulan"]
    },
    {
        id: 9,
        brand: "Mercedes-Benz",
        model: "C200 Avantgarde",
        year: 2018,
        price: "Rp 595.000.000",
        image: "/images/viva-white.png",
        km: "42.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Sedan",
        status: "Ex-CEO",
        label: "History Rawat Resmi",
        plus: ["Interior kulit beige bersih", "Ambience light 64 warna", "Tangan pertama dari baru"],
        minus: ["Buku manual hilang", "Ada bunyi gluduk di roda depan"]
    },
    {
        id: 10,
        brand: "Toyota",
        model: "Innova Zenix Q",
        year: 2023,
        price: "Rp 585.000.000",
        image: "/images/grandx-white.png",
        km: "3.000 KM",
        fuel: "Hybrid",
        transmission: "AT",
        type: "MPV",
        status: "Fresh",
        label: "Antrian Inden",
        plus: ["Sangat irit bahan bakar", "Panoramic sunroof luas", "Sudah pasang coating"],
        minus: ["Plat nomor belum keluar", "Material dashboard banyak plastik"]
    },
    {
        id: 11,
        brand: "Honda",
        model: "City Hatchback RS",
        year: 2022,
        price: "Rp 315.000.000",
        image: "/images/cross-white.png",
        km: "18.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Hatchback",
        status: "Ready",
        label: "Harian Irit",
        plus: ["Velg sudah repaint hitam", "Audio upgrade subwoofer", "Interior sangat rapi"],
        minus: ["Tool kit tidak lengkap", "Ada dent kecil di kap mesin"]
    },
    {
        id: 12,
        brand: "Mitsubishi",
        model: "Xpander Ultimate",
        year: 2021,
        price: "Rp 265.000.000",
        image: "/images/grand-grey.png",
        km: "28.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "MPV",
        status: "Ready",
        label: "Favorit Keluarga",
        plus: ["Cruise control aktif", "Headunit Android Auto", "Kaki-kaki empuk"],
        minus: ["Sarung jok mulai kusam", "Baret pemakaian di bagasi"]
    },
];

interface CarListingProps {
    searchQuery: string;
    budgetRange: string;
}

export default function CarListing({ searchQuery, budgetRange }: CarListingProps) {
    const [filter, setFilter] = useState("Semua");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const categories = ["Semua", "Sedan", "SUV", "MPV", "Hatchback"];

    const getNumericPrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
    };

    const filteredCars = cars.filter(car => {
        // Category Filter
        const matchesCategory = filter === "Semua" || car.type === filter;

        // Search Filter
        const searchInput = searchQuery.toLowerCase();
        const matchesSearch = car.brand.toLowerCase().includes(searchInput) ||
            car.model.toLowerCase().includes(searchInput);

        // Budget Filter
        let matchesBudget = true;
        const price = getNumericPrice(car.price);
        if (budgetRange === "100-200") {
            matchesBudget = price >= 100000000 && price <= 200000000;
        } else if (budgetRange === "200-500") {
            matchesBudget = price >= 200000000 && price <= 500000000;
        } else if (budgetRange === "500+") {
            matchesBudget = price >= 500000000;
        }

        return matchesCategory && matchesSearch && matchesBudget;
    });

    return (
        <section className="py-24 bg-brand-dark" id="collection">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": filteredCars.map((car, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": `${car.brand} ${car.model} ${car.year}`,
                                "description": `Mobil bekas berkualitas ${car.brand} ${car.model} tahun ${car.year}. Kilometer ${car.km}, transmisi ${car.transmission}.`,
                                "image": car.image,
                                "offers": {
                                    "@type": "Offer",
                                    "price": car.price.replace(/[^0-9]/g, ""),
                                    "priceCurrency": "IDR",
                                    "availability": car.status === "Sold" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
                                }
                            }
                        }))
                    })
                }}
            />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div className="max-w-xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                            Stok Terupdate Hari Ini
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-4 outfit">
                            Koleksi <span className="text-brand-blue">Terpilih</span>
                        </h2>
                        <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                            Setiap unit telah melalui proses inspeksi 100 titik untuk menjamin
                            kualitas, legalitas, dan kenyamanan Anda berkendara melintasi jalanan.
                        </p>
                    </div>

                    <div className="flex gap-2 p-1.5 bg-white/5 rounded-full overflow-x-auto no-scrollbar border border-white/10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${filter === cat ? "bg-brand-blue text-white shadow-xl shadow-brand-blue/30" : "text-white/40 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredCars.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
                        {filteredCars.map((car, idx) => (
                            <motion.div
                                key={car.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setExpandedId(expandedId === car.id ? null : car.id)}
                                className={`group bg-brand-gray border border-white/5 rounded-[32px] overflow-hidden hover:border-brand-blue/30 transition-all cursor-pointer select-none h-fit ${expandedId === car.id ? "ring-2 ring-brand-blue/50 bg-brand-zinc/40" : ""
                                    } ${car.status === "Sold" ? "opacity-75" : ""
                                    }`}
                            >
                                {/* Image Container */}
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image
                                        src={car.image}
                                        alt={`${car.brand} ${car.model}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${car.status === "Sold" ? "bg-red-500 text-white" :
                                            car.status === "Fresh" ? "bg-green-500 text-white" :
                                                "bg-brand-blue text-white"
                                            }`}>
                                            {car.label}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-brand-dark/60 backdrop-blur-md p-2 rounded-full text-white/60 group-hover:text-brand-blue transition-colors">
                                        <Plus size={16} className={`transition-transform duration-300 ${expandedId === car.id ? "rotate-45" : ""}`} />
                                    </div>
                                    {car.status === "Sold" && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-3xl font-black text-white -rotate-12 border-4 border-white px-6 py-2">SOLD</span>
                                        </div>
                                    )}
                                </div>

                                {/* Info Container */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold outfit">
                                            {car.brand} {car.model}
                                        </h3>
                                        <div className="flex flex-col items-end text-xs font-bold text-white/40">
                                            <span>{car.year}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-1.5 text-white/40">
                                            <Gauge size={14} />
                                            <span className="text-xs">{car.km}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-white/40">
                                            <Fuel size={14} />
                                            <span className="text-xs">{car.fuel}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-white/40">
                                            <Settings size={14} />
                                            <span className="text-xs">{car.transmission}</span>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === car.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-white/5 space-y-4 mb-6">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-widest text-green-500 font-bold mb-2">Plus / Kelebihan</p>
                                                        <ul className="space-y-1.5">
                                                            {car.plus.map((p, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                                                                    <CheckCircle2 size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                                    {p}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-2">Minus / Catatan</p>
                                                        <ul className="space-y-1.5">
                                                            {car.minus.map((m, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                                                                    <XCircle size={12} className="text-red-400 mt-0.5 flex-shrink-0" />
                                                                    {m}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="text-xl font-bold text-brand-blue">{car.price}</div>
                                        {car.status !== "Sold" ? (
                                            <a
                                                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan unit ${car.brand} ${car.model} ${car.year}. Apakah unit ini masih ready?`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:shadow-brand-blue/40"
                                            >
                                                <MessageCircle size={18} />
                                            </a>
                                        ) : (
                                            <div className="text-[10px] text-white/20 font-bold uppercase">Sudah Terjual</div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center glass rounded-[40px] border-dashed border-2 border-white/10">
                        <div className="mb-6 flex justify-center">
                            <Plus size={48} className="text-white/10 rotate-45" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 outfit">Unit Tidak Ditemukan</h3>
                        <p className="text-white/40">Coba ubah kriteria pencarian atau budget Anda.</p>
                        <button
                            onClick={() => {
                                window.location.href = "#";
                                setTimeout(() => window.location.reload(), 100);
                            }}
                            className="mt-6 text-brand-blue text-sm font-bold hover:underline"
                        >
                            Reset Semua Filter
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
