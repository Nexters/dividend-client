import type { Metadata } from "next";
import { Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { GlobalProvider } from "./global-provider";
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Payout",
  description: "Calculate your dividend payout with ease.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <GlobalProvider>
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <NavigationBar />
            <div className="h-full w-full flex-1">{children}</div>
            <Toaster position="top-center" />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}

// "mx-auto max-w-[--max-width]"
