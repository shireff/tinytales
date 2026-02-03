"use client";

import React, { memo } from "react";
import { Star } from "lucide-react";

const MOCK_REVIEWS = [
  { id: 1, author: "Alex Daewn", timeAgo: "4 months ago", rating: 5 },
  { id: 2, author: "Alex Daewn", timeAgo: "4 months ago", rating: 5 },
  { id: 3, author: "Alex Daewn", timeAgo: "4 months ago", rating: 5 },
  { id: 4, author: "Alex Daewn", timeAgo: "4 months ago", rating: 5 },
] as const;

const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed";

interface ReviewCardProps {
  author: string;
  timeAgo: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, timeAgo, rating }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-100 pb-8 last:border-0 md:flex-row md:gap-0">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h4 className="font-poppins text-[16px] font-bold text-[#020202]">
              {author}
            </h4>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < rating ? "fill-[#BE968E] text-[#BE968E]" : "fill-[#C4C4C4] text-[#C4C4C4]"}
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>
          <span className="font-poppins text-[12px] font-medium text-[#999999]">
            {timeAgo}
          </span>
        </div>

        <p className="font-poppins text-[14px] leading-[1.7] text-[#64748B]">
          {LOREM_TEXT}
        </p>
      </div>
    </div>
  );
};

const ReviewList: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1102px] flex-col gap-6 pt-6 md:gap-8 md:pt-12">
      {MOCK_REVIEWS.map((review) => (
        <ReviewCard
          key={review.id}
          author={review.author}
          timeAgo={review.timeAgo}
          rating={review.rating}
        />
      ))}

      <div className="mt-6 flex w-full items-center justify-center md:mt-10">
        <button
          type="button"
          className="flex h-[53px] w-[207px] items-center justify-center rounded-xl bg-[#F5F5F5] text-[14px] font-bold text-[#BE968E] transition-colors hover:bg-[#EEF1F4] active:scale-[0.98]"
        >
          View More Comments
        </button>
      </div>
    </div>
  );
};

export default memo(ReviewList);
