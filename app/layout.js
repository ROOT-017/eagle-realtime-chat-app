import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ContextProvider } from "@/store/contex";
import NextAuthProvider from "./providers/sessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EAGLE CAHT",
  description: "Realtime chat app with connected Github users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../assets/3d-fluency-falcon.png" />
      <body className={inter.className + "  flex flex-col"}>
        <ContextProvider>
          <Navbar />
          <div className="pt-16 w-full h-screen">
            <NextAuthProvider>{children}</NextAuthProvider>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
