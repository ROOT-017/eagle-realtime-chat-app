import "./globals.css";
import Navbar from "@/components/navbar";
import { ContextProvider } from "@/store/contex";
import NextAuthProvider from "./providers/sessionProvider";
import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "EAGLE CHAT",
  description: "Realtime chat app with connected Github users",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="../assets/3d-fluency-falcon.png" />
      <body className={"flex flex-col"}>
        <ContextProvider>
          <NextAuthProvider>
            <Navbar />
            <div className="pt-16 w-full h-screen">{children}</div>
          </NextAuthProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
