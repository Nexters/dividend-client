import { getYearRange } from "@/utils/date";
import React from "react";

export const Header = React.memo(() => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 p-5">
      <h2 className="text-h2 text-grey-900">Overall Dividend Rankings</h2>
      <p className=" text-body3 text-grey-600">{getYearRange(new Date())}</p>
    </div>
  );
});
