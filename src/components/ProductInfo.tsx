"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import { Star, Minus, Plus, Heart, Share2, ShoppingCart } from "lucide-react";
import AttributeSelect from "./AttributeSelect";

const COLOR_OPTIONS = [
  { label: "Pink", colorClass: "bg-[#BE968E]" },
  { label: "Dark Blue", colorClass: "bg-[#020202]" },
] as const;

const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>("Pink");

  const incrementQuantity = useCallback(() => setQuantity((q) => q + 1), []);
  const decrementQuantity = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), []);

  const totalPrice = useMemo(() => 300 * quantity, [quantity]);

  return (
    <div className="flex flex-col gap-6 animate-in">
      <div className="space-y-4">
        <span className="inline-flex items-center justify-center px-4 py-2 w-[82px] h-[37px] rounded-[32px] border-[0.5px] border-[#BE968E] bg-[#BE968E] text-white text-[14px] font-semibold leading-none font-poppins">
          T-Shirt
        </span>

        <h1 className="font-poppins text-[28px] font-bold leading-tight text-[#020202] md:text-[32px] max-w-[500px]">
          J.VER Women&apos;s Dress Shirts Solid Long Sleeve Stretch
          Wrinkle-Free
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < 4 ? "fill-[#BE968E] text-[#BE968E]" : "fill-[#C4C4C4] text-[#C4C4C4]"}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="font-poppins text-[15px] font-bold text-[#020202]">
            4.0 <span className="text-[#999999] font-medium ml-1">(2910 Reviews)</span>
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="font-poppins text-[32px] font-bold text-[#020202]">
          ${totalPrice}
        </span>
        <span className="font-poppins text-[20px] font-medium text-[#999999] line-through">
          $360
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-poppins text-[15px] font-bold text-[#020202]">
            Colors:
          </span>
          <div className="flex gap-2">
            {COLOR_OPTIONS.map((color) => (
              <button
                key={color.label}
                type="button"
                onClick={() => setSelectedColor(color.label)}
                className={`h-8 w-8 rounded-full border-2 transition-all active:scale-95 ${selectedColor === color.label
                    ? "border-black scale-110"
                    : "border-transparent"
                  }`}
                aria-label={color.label}
              >
                <div className={`h-full w-full rounded-full ${color.colorClass}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-start pt-2">
          <AttributeSelect label="Product Size" value="Small" />
          <AttributeSelect label="Product Type" value="T-Shirt" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <div className="flex h-[56px] w-[140px] items-center justify-between overflow-hidden rounded-[12px] bg-[#F5F5F5] px-2">
          <button
            type="button"
            onClick={decrementQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/50 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>
          <span className="w-8 text-center font-poppins text-[18px] font-bold">
            {quantity}
          </span>
          <button
            type="button"
            onClick={incrementQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/50 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="flex flex-1 items-center gap-3 min-w-[200px]">
          <button
            type="button"
            className="flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[12px] bg-[#020202] px-6 font-poppins text-[clamp(14px,2vw,16px)] font-bold text-white transition-all hover:bg-[#1A1A1A] active:scale-[0.98]"
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] border-[0.5px] border-[#BE968E] text-[#BE968E] transition-all hover:bg-[#BE968E]/5 active:scale-90"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              className="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] border-[0.5px] border-black text-black transition-all hover:bg-black/5 active:scale-90"
              aria-label="Share product"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5]">
            <Image src="/delivery-icon.png" alt="Delivery" width={24} height={24} />
          </div>
          <div>
            <p className="font-poppins text-sm font-bold">Free Delivery</p>
            <p className="font-poppins text-xs text-[#999999]">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5]">
            <Image src="/return-icon.png" alt="Returns" width={24} height={24} />
          </div>
          <div>
            <p className="font-poppins text-sm font-bold">Easy Returns</p>
            <p className="font-poppins text-xs text-[#999999]">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInfo);
