import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/modules/header/Index";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anastasia Guletsky Kelly",
	description:
		"Anastasia is a creative director specializing in brand strategy, visual storytelling, and design leadership. Explore selected work, creative direction, and collaborations.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Header />
			<body className={inter.variable}>{children}</body>
		</html>
	);
}
