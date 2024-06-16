import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
    title: "蔡家誠(Terry)",
    description: "創意永不停歇",
    icons: {
        icon: "/logo.png",
    },
};

const openhuninnFont = localFont({
    src: "./fonts/jf-openhuninn-2.0.woff2",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hant">
            <body className={openhuninnFont.className}>{children}</body>
        </html>
    );
}
