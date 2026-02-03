"use client";

import React, { memo } from "react";
import { Star } from "lucide-react";

const RATING_DATA = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 50 },
  { stars: 3, percentage: 33 },
  { stars: 2, percentage: 20 },
  { stars: 1, percentage: 10 },
] as const;

const RatingSummary: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] py-12">
      <div className="mb-10 flex flex-col items-start gap-1">
        <h2 className="font-poppins text-[24px] font-semibold text-[#020202]">
          Rating & Reviews
        </h2>
        <div className="h-1 w-10 rounded-full bg-[#BE968E]" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-[180px] w-full flex-col items-center justify-center rounded-[24px] bg-[#F5F5F5] md:w-[180px]">
            <span className="font-poppins text-[48px] font-black text-[#020202]">
              4.0
            </span>
            <div className="flex gap-1 py-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < 4 ? "fill-[#BE968E] text-[#BE968E]" : "fill-[#C4C4C4] text-[#C4C4C4]"}
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h3 className="font-poppins text-[20px] font-bold text-[#020202]">
              Total Reviews
            </h3>
            <p className="font-poppins text-[15px] font-medium leading-[1.6] text-[#828282]">
              All reviews are from verified purchasers. Our ratings are the
              average of all submitted scores globally.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {RATING_DATA.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex w-10 items-center gap-1">
                <span className="font-poppins text-[15px] font-bold text-[#020202]">
                  {item.stars}
                </span>
                <Star size={14} className="fill-[#020202] text-[#020202]" strokeWidth={0} />
              </div>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F5F5F5]">
                <div
                  className="h-full rounded-full bg-[#BE968E] transition-all duration-1000"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span className="w-12 text-right font-poppins text-[14px] font-medium text-[#828282]">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-slate-100 pt-8">
        <div className="flex flex-col gap-1">
          <span className="font-poppins text-[18px] font-bold text-[#020202]">
            Customer Feedback
          </span>
          <span className="font-poppins text-[14px] font-medium text-[#828282]">
            Showing 1-10 of 2.9k reviews
          </span>
        </div>

        <button
          type="button"
          className="flex h-[56px] w-full items-center justify-center rounded-[12px] bg-[#BE968E] px-8 font-poppins text-[15px] font-bold text-white transition-all hover:bg-[#a8827a] active:scale-[0.98] md:w-auto"
        >
          Add Comment
        </button>
      </div>
    </section>
  );
};

export default memo(RatingSummary);