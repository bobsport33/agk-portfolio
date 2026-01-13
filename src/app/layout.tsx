import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@pigment-css/react/styles.css";
import { globalCss } from "@pigment-css/react";

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

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
globalCss`
  :root {
	--primary: #f0843b;
	--secondary: #2596be;
	--neutral100: #fff;
	--padding: 0 24px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-inter);
    background: var(--neutral100);
    color: #333;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.variable}>
				<Header />
				{children}
			</body>
		</html>
	);
}
