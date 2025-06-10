import { Suspense } from 'react'; // 1. Import Suspense from React
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whatbytes Store",
  description: "A frontend assignment for Whatbytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 flex flex-col min-h-screen`}>
        <CartProvider>
          {/* 2. Wrap your Header component in a Suspense boundary */}
          <Suspense fallback={<header className="bg-white shadow-md h-[80px]" />}>
            <Header />
          </Suspense>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}