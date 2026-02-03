"use client";

import React, { memo, useRef } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCT_DATA = {
  name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
  category: "Dresses",
  price: "AED 900",
  oldPrice: "AED 1300",
  rating: "4.5",
  reviewCount: "2910",
  discount: "25% OFF",
  colorCount: "+2",
};

const SIMILAR_PRODUCTS = [
  { id: "1", image: "/similar-items/image-1.png", ...PRODUCT_DATA },
  { id: "2", image: "/similar-items/image-2.png", ...PRODUCT_DATA },
  { id: "3", image: "/similar-items/image-3.png", ...PRODUCT_DATA },
  { id: "4", image: "/similar-items/image-4.png", ...PRODUCT_DATA },
  { id: "5", image: "/similar-items/image-5.png", ...PRODUCT_DATA },
];

const SimilarItems: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.5;
    scrollRef.current.scrollTo({
      left: dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-2xl font-poppins font-semibold text-[#020202]">
          Similar Items
        </h2>
        <div className="h-1 w-10 rounded-full bg-[#BE968E]" />
      </div>

      <div className="relative group/slider mx-auto max-w-[1440px]">
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-[120px] w-full h-[450px] gap-4"
        >
          {SIMILAR_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex-shrink-0 bg-white rounded-md overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-xl snap-start w-[288px] h-[384px]"
            >
              <div className="relative h-[220px] bg-[#F6F6F6] overflow-hidden group/item">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                  sizes="288px"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#BE968E] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                    {product.discount}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                  <button type="button" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#BE968E] shadow-lg">
                    <ShoppingCart size={14} />
                  </button>
                  <button type="button" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#BE968E] shadow-lg">
                    <Heart size={14} />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between h-[164px]">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star fill="#BE968E" size={12} className="text-[#BE968E]" strokeWidth={0} />
                      <span className="text-[11px] font-bold text-[#1A1A1A] font-poppins">
                        {product.rating} <span className="text-slate-400 font-medium">({product.reviewCount})</span>
                      </span>
                    </div>
                  </div>
                  <h3 className="font-poppins font-semibold text-[#1A1A1A] text-[13px] leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[16px] font-black text-[#1A1A1A] font-poppins">
                      {product.price}
                    </span>
                    <span className="text-[12px] font-medium text-slate-400 line-through font-poppins">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-900 border-2 border-white" />
                      <div className="w-5 h-5 rounded-full bg-[#BE968E] border-2 border-white" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 font-poppins">
                      {product.colorCount}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#B0B0B0] hover:bg-slate-200 transition-colors shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-opacity shadow-lg bg-[#BE968E]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(SimilarItems);
