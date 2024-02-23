"use client";
import { useStocksStore } from "@/state/stores/stocks-store";
import { useRouter } from "next/navigation";
import React from "react";

export default function TickerFooter() {
  const { stocks } = useStocksStore();
  const router = useRouter();
  const isSubmittable = React.useMemo(() => {
    return stocks.length > 0;
  }, [stocks.length]);

  const handleTickerSubmit = () => {
    router.push(`/report`);
  };

  return (
    <div
      className="fixed bottom-4 flex w-full justify-center pt-12"
      style={{
        backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
        maxWidth: 768,
      }}
    >
      <button
        disabled={!isSubmittable}
        className="mx-5 w-full rounded-lg bg-main-700 p-4"
        style={{
          backgroundColor: isSubmittable ? "#4F6AFC" : "#7692DA",
          color: isSubmittable ? "#fff" : "rgba(255, 255, 255, 0.40)",
        }}
        onClick={handleTickerSubmit}
      >
        <p className="text-h5 text-white">Analyze My Portfolio</p>
      </button>
    </div>
  );
}