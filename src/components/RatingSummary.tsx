"use client";

import React, { memo } from "react";
import { Star } from "lucide-react";

const RATING_DATA = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 9 },
] as const;

const RatingSummary: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] py-12">
      <div className="mb-8 flex flex-col items-start gap-1">
        <h2 className="font-poppins text-[24px] font-bold text-[#020202]">
          Rating & Reviews
        </h2>
        <div className="h-1 w-[80px] bg-[#BE968E]" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] items-center">
        <div className="flex items-baseline gap-4 justify-center md:justify-start order-2 md:order-1">
          <span className="font-poppins text-[120px] font-medium leading-[180px] tracking-[-4px] text-[#020202]">
            4,5
          </span>
          <span className="font-poppins text-[24px] font-medium leading-[36px] text-[#B0B0B0]">
            /5
          </span>
        </div>

        <div className="flex flex-col justify-center gap-3 px-8 order-3 md:order-2">
          {RATING_DATA.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-2 w-8 shrink-0">
                <Star size={20} className="fill-[#BE968E] text-[#BE968E]" strokeWidth={0} />
                <span className="font-poppins text-[16px] font-medium text-[#999999]">
                  {item.stars}
                </span>
              </div>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F5F5F5]">
                <div
                  className="h-full rounded-full bg-[#BE968E]"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span className="w-10 text-right font-poppins text-[14px] font-medium text-[#020202]">
                %{item.percentage}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-center justify-center gap-6 min-w-[200px] order-1 md:order-3">
          <div className="flex flex-col items-center text-center">
            <span className="font-poppins text-[16px] font-medium text-[#020202]">
              Total Reviews
            </span>
            <span className="font-poppins text-[60px] font-semibold leading-[90px] text-[#020202]">
              3.0K
            </span>
          </div>

          <button
            type="button"
            className="flex h-[56px] w-[186px] items-center justify-center gap-2 rounded-[12px] bg-[#BE968E] px-8 font-poppins text-[16px] font-semibold text-white transition-all hover:bg-[#a8827a] active:scale-[0.98]"
          >
            Add Comment
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(RatingSummary);