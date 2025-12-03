import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SplashScreen from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Indianness Academy",
  description: "Fostering Unity Through Heritage and Values.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Preloader
          minDuration={3500}
          logoSrc="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/Indianness%20Academy%20LOGO%202021.png?updatedAt=1759219577250"
          portraitSrc="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/mgandhi%201.png"
          quote={`All of us are Indians first and last. Wherever we live and to whatever creed or class or province we belong.`}
          quoteAuthor="Mahatma Gandhi"
          background="bg-white"
        />
        {/* <SplashScreen /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
//  portraitSrc="https://ik.imagekit.io/yqw45xwgd/IndianessAcademy/MT.png"
