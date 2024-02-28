"use client";

import React, { useMemo, useState } from "react";
import { MonthlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { BarChart } from "@tremor/react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button/button";

const COLORS = ["navy-700"];

const dataFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

type halfToggleType = "first" | "second";

interface MonthlyDividendProps {
  data: MonthlyDividendResponse[];
}
export const MonthlyDividend = React.memo(({ data }: MonthlyDividendProps) => {
  const [halfToggleState, setHalfToggleState] = useState<halfToggleType>("first");
  const router = useRouter();

  const monthlyDividends = data.map((item) => {
    return {
      date:
        parseInt((item.year ?? 0).toString().slice(-2)) +
        "." +
        ((item.month ?? 0) < 10 ? `0${item.month}` : (item.month ?? 0).toString()),
      totalDividend: item.totalDividend,
    };
  });

  const handleToggle = (type: halfToggleType) => {
    setHalfToggleState(type);
  };

  const handleCheckMonthlyClick = () => {
    router.push(`/report/dividend/monthly`);
  };

  const shownChartData = useMemo(() => {
    if (halfToggleState === "first") {
      return monthlyDividends.slice(0, 6);
    }

    return monthlyDividends.slice(6, 12);
  }, [halfToggleState, monthlyDividends]);

  return (
    <div className="flex flex-col gap-6 p-5 pb-8">
      <div className="flex w-full flex-col items-start">
        <p className=" text-h5 text-grey-600">Average Monthly Dividend Income</p>
        <p className=" text-h1 text-grey-900">{`$${250}`}</p>
      </div>
      <BarChart
        index="date"
        categories={["totalDividend"]}
        data={shownChartData}
        className="h-[165px]"
        showAnimation={true}
        colors={COLORS}
        valueFormatter={dataFormatter}
        onValueChange={(v) => console.log(v)}
        showGridLines={false}
        showYAxis={false}
        showLegend={false}
      />

      <div className="mb-2 flex justify-between rounded-3xl border border-gray-100 p-1.5">
        <ShadcnButton
          className={`flex flex-1 items-center justify-center rounded-3xl ${
            halfToggleState === "first" ? "bg-white" : "bg-gray-100"
          } text-h5 text-gray-700`}
          style={{ boxShadow: halfToggleState === "first" ? "0px 2px 10px 0px rgba(0, 0, 0, 0.08)" : undefined }}
          onClick={() => handleToggle("first")}
        >
          First Half
        </ShadcnButton>
        <ShadcnButton
          className={`flex flex-1 items-center justify-center rounded-3xl ${
            halfToggleState === "second" ? "bg-white" : "bg-gray-100"
          } text-h5 text-gray-700`}
          style={{ boxShadow: halfToggleState === "second" ? "0px 2px 10px 0px rgba(0, 0, 0, 0.08)" : undefined }}
          onClick={() => handleToggle("second")}
        >
          Second Half
        </ShadcnButton>
      </div>

      <Button onClick={handleCheckMonthlyClick} className="shrink-0" variant={"secondary"} size={"max"}>
        Check Your Monthly Dividend
      </Button>
    </div>
  );
});
