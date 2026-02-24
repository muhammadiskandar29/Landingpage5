import Link from "next/link";
import { Car, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-gray border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="bg-brand-blue p-2 rounded-lg group-hover:rotate-12 transition-transform">
                                <Car className="text-white" size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tighter outfit">
                                AutoSwift<span className="text-brand-blue">.id</span>
                            </span>
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed font-light mb-8">
                            Platform kurasi mobil bekas premium terpercaya. Kami memastikan setiap
                            perjalanan Anda dimulai dengan kejujuran dan kualitas terbaik.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-blue">Navigasi</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link href="#collection" className="hover:text-white transition-colors">Koleksi Mobil</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#how-to" className="hover:text-white transition-colors">Cara Pembelian</Link></li>
                            <li><Link href="#faq" className="hover:text-white transition-colors">Bantuan / FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-blue">Keamanan</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">Laporan Inspeksi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Ketentuan Garansi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-blue">Kontak Kami</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-blue" />
                                <span>Bursa Otomotif Sunter, Blok B-22, Jakarta Utara.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-blue" />
                                <span>+62 21-8899-7766</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-blue" />
                                <span>hello@autoswift.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-white/20">
                        © {new Date().getFullYear()} AutoSwift Indonesia. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/20">
                        <a href="#">Dealer Dashboard</a>
                        <a href="#">Karir</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
