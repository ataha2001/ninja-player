import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
// import { SessionProvider } from "next-auth/react"
import { AppProvider } from "@/utils/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppProvider>
      <Header />
      {children}
      <Footer />
      </AppProvider>
      </body>
    </html>
  );
}
