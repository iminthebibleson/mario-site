import type { Metadata } from "next";
import localFont from "next/font/local"; // 1. Import the real function from Next.js
import RedWavesBackground from "./components/RedWavesBackground";
import "./globals.css";

// 2. Load your custom font (relative path from app/layout.tsx to your public folder)
const marioFont = localFont({
  src: "../../public/SuperMario.ttf",
  variable: "--font-mario",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steam's New Super Mario Bros. Deluxe | Modding Community",
  description:
    "A community hub for Steam's New Super Mario Bros. Deluxe mod, NSMBU Deluxe tools, creator resources, and game research.",
  openGraph: {
    title: "Steam's New Super Mario Bros. Deluxe",
    description:
      "Discover the mod, explore community tools, and follow new resources for New Super Mario Bros. U Deluxe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // 3. Use standard React children typing
}) {
  return (
    // 4. Apply the font variable here
    <html lang="en" className={marioFont.variable}>
      <body className="antialiased">
        <RedWavesBackground />
        {children}
      </body>
    </html>
  );
}
