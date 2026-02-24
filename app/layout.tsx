import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoSwift.id | Jual Mobil Bekas Jakarta Sunter | Inspeksi & Garansi",
  description: "Cari mobil bekas berkualitas di Jakarta? AutoSwift menyediakan unit premium dengan inspeksi 100 titik, garansi mesin, dan surat-surat terjamin. Kunjungi showroom kami di Bursa Sunter.",
  keywords: ["mobil bekas jakarta", "jual mobil bekas sunter", "dealer mobil bekas terpercaya", "honda civic bekas jakarta", "toyota fortuner bekas", "inspeksi mobil bekas"],
  openGraph: {
    title: "AutoSwift.id - Dealer Mobil Bekas Pilihan di Jakarta",
    description: "Mobil bekas premium dengan standar inspeksi tinggi. Aman, transparan dan bergaransi.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
