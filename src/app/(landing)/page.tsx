"use client";
import { Button } from "@/components/Button";
import Intro from "./_components/intro";
import MonthlyDividend from "./_components/monthly-dividend";
import SectorBalanced from "./_components/sector-balanced";
import TargetUser from "./_components/target-user";
import YearlyDividend from "./_components/yearly-dividend";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="flex w-full flex-col items-center justify-center gap-20 pb-32 pt-10">
        <TargetUser />
        <SectorBalanced />
        <MonthlyDividend />
        <YearlyDividend />
        <Footer />
      </div>
      <div className="fixed bottom-0 left-1/2 w-full max-w-[768px] -translate-x-1/2 bg-[linear-gradient(0deg,_#FFF_52.78%,_rgba(255,_255,_255,_0.00)_100%);] p-5 pt-[50px]">
        <Button variant={"primary"} size={"large"} className="w-full ">
          Check My Dividend Portfolio
        </Button>
      </div>
    </>
  );
}
