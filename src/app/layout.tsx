import type { Metadata } from "next";
import { Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { GlobalProvider } from "./global-provider";
import { cn } from "@/utils/cn";
import NavigationBar from "@/components/common/navigation-bar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(dm_sans.className)}>
        <GlobalProvider>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <NavigationBar />
            <main className="h-full w-full max-w-[--max-width] flex-1 px-4">{children}</main>
            <Toaster position="top-center" />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}

// "mx-auto max-w-[--max-width]"
