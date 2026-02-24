"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Gauge, Settings, ChevronRight, MessageCircle } from "lucide-react";

const cars = [
    {
        id: 1,
        brand: "Honda",
        model: "Civic RS Turbo",
        year: 2021,
        price: "Rp 485.000.000",
        image: "/images/car-1.jpg",
        km: "24.000 KM",
        fuel: "Bensin",
        transmission: "AT",
        type: "Sedan",
        status: "Fresh",
        label: "Baru Masuk",
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
    },
];

export default function CarListing() {
    const [filter, setFilter] = useState("Semua");

    const categories = ["Semua", "Sedan", "SUV", "MPV", "Hatchback"];

    return (
        <section className="py-24 bg-brand-dark" id="collection">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": cars.map((car, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": `${car.brand} ${car.model} ${car.year}`,
                                "description": `Mobil bekas berkualitas ${car.brand} ${car.model} tahun ${car.year}. Kilometer ${car.km}, transmisi ${car.transmission}.`,
                                "image": `https://autoswift.id${car.image}`,
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
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 outfit">
                            Koleksi <span className="text-brand-blue">Terpilih</span>
                        </h2>
                        <p className="text-white/60 font-light">
                            Setiap unit telah melalui proses inspeksi 100 titik untuk menjamin
                            kualitas, legalitas, dan kenyamanan Anda berkendara.
                        </p>
                    </div>

                    <div className="flex gap-2 p-1 bg-white/5 rounded-full overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${filter === cat ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cars.map((car, idx) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`group bg-brand-gray border border-white/5 rounded-3xl overflow-hidden hover:border-brand-blue/30 transition-all ${car.status === "Sold" ? "opacity-75" : ""
                                }`}
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={car.image}
                                    alt={`${car.brand} ${car.model}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${car.status === "Sold" ? "bg-red-500 text-white" :
                                        car.status === "Fresh" ? "bg-green-500 text-white" :
                                            "bg-brand-blue text-white"
                                        }`}>
                                        {car.label}
                                    </span>
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
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs text-white/40 font-bold">{car.year}</span>
                                        {car.status !== "Sold" && (
                                            <span className="text-[10px] text-green-500 font-medium flex items-center gap-1 mt-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                Sudah dilihat {Math.floor(Math.random() * 5) + 2}x hari ini
                                            </span>
                                        )}
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

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="text-xl font-bold text-brand-blue">{car.price}</div>
                                    {car.status !== "Sold" ? (
                                        <a
                                            href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan unit ${car.brand} ${car.model} ${car.year}. Apakah unit ini masih ready?`}
                                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-blue transition-colors"
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

                <div className="mt-16 text-center">
                    <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 mx-auto">
                        Lihat Stok Lainnya
                        <ChevronRight size={18} />
                    </button>
                    <p className="mt-6 text-sm text-white/30 italic">
                        * Stok unit berganti setiap hari. Hubungi kami untuk update stok terbaru.
                    </p>
                </div>
            </div>
        </section>
    );
}
