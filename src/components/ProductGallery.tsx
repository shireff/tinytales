"use client";

import React, { useState, useCallback, memo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  mainImage: string;
  thumbnails: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, thumbnails }) => {
  const [activeImage, setActiveImage] = useState(mainImage);

  const currentIndex = thumbnails.indexOf(activeImage);

  const navigateGallery = useCallback((direction: 'prev' | 'next') => {
    const total = thumbnails.length;
    const offset = direction === 'prev' ? -1 : 1;
    const nextIndex = (currentIndex + offset + total) % total;
    setActiveImage(thumbnails[nextIndex]);
  }, [currentIndex, thumbnails]);

  const handlePrev = () => navigateGallery('prev');
  const handleNext = () => navigateGallery('next');

  return (
    <div className="flex w-full max-w-full flex-col overflow-hidden lg:max-w-[524px]">
      <div className="group relative mx-auto aspect-[524/565] w-full max-w-[524px] overflow-hidden rounded-[24px] bg-[#F5F5F5]">
        <div className="absolute top-0 left-0 right-0 z-10 h-[15%] w-full bg-gradient-to-b from-black/30 to-transparent" />

        <div className="absolute top-4 left-4 right-4 z-20 flex h-[4px] flex-row gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-full flex-1 rounded-[16px]",
                i === 1 ? "bg-white" : "bg-neutral-400"
              )}
            />
          ))}
        </div>

        <Image
          src={activeImage}
          alt="Active product view"
          fill
          className="object-cover transition-all duration-500"
          priority
        />

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-5 top-1/2 z-30 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-[38px] bg-[#C4C4C4] text-white shadow-md transition-all active:scale-90 lg:hidden group-hover:flex"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} className="stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-5 top-1/2 z-30 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-[38px] bg-[#BE968E] text-white shadow-md transition-all active:scale-90 lg:hidden group-hover:flex"
          aria-label="Next image"
        >
          <ChevronRight size={20} className="stroke-[2.5]" />
        </button>
      </div>

      <div className="scrollbar-hide mx-auto mt-8 flex w-full max-w-[524px] gap-2 overflow-x-auto pb-2">
        {thumbnails.map((thumb, index) => {
          const isActive = activeImage === thumb;
          const isLast = index === thumbnails.length - 1;

          return (
            <button
              key={thumb}
              type="button"
              onClick={() => setActiveImage(thumb)}
              className={cn(
                "relative aspect-[169/183] w-[min(169px,30vw)] shrink-0 overflow-hidden rounded-[24px] bg-[#F5F5F5] transition-all",
                isActive && "ring-2 ring-black ring-offset-2"
              )}
            >
              <Image
                src={thumb}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {isLast && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 font-poppins text-[clamp(1rem,4vw,2rem)] font-semibold text-white">
                  +2
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProductGallery);
