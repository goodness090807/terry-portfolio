"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
    return (
        <div className="relative flex h-screen flex-col bg-hero bg-cover bg-center">
            <div className="h-screen bg-black/30 w-full absolute"></div>
            <Header />
            <main className="flex-1">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}
