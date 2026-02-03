"use client";

import React, { memo } from "react";
import { Star } from "lucide-react";

const MOCK_REVIEWS = [
  { id: 1, author: "John Doe", timeAgo: "2 days ago", rating: 5 },
  { id: 2, author: "Jane Smith", timeAgo: "1 week ago", rating: 4 },
  { id: 3, author: "Mike Johnson", timeAgo: "2 weeks ago", rating: 5 },
] as const;

interface ReviewCardProps {
  author: string;
  timeAgo: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, timeAgo, rating }) => {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BE968E] font-poppins text-lg font-bold text-white">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-poppins text-[15px] font-bold text-[#020202]">
              {author}
            </h4>
            <span className="font-poppins text-[13px] text-[#828282]">
              {timeAgo}
            </span>
          </div>
        </div>

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

      <p className="font-poppins text-[14px] leading-[1.7] text-[#64748B]">
        Great quality product! The material is soft and comfortable. Highly
        recommend for anyone looking for a reliable and stylish option.
      </p>
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
