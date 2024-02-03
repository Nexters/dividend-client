import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import React from "react";
import { GlobalProvider } from "./global-provider";
import NavigationBar from "@/components/navigation-bar/navigation-bar";

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
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
