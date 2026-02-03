"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import { Minus, Plus } from "lucide-react";
import AttributeSelect from "./AttributeSelect";

const COLOR_OPTIONS = [
  { label: "Red", colorClass: "bg-[#D90202]" },
  { label: "Blue", colorClass: "bg-[#B8CCDA]" },
  { label: "Gold", colorClass: "bg-[#988755]" },
  { label: "Sky Blue", colorClass: "bg-[#7198C8]" },
  { label: "Gray", colorClass: "bg-[#5D5D5B]" },
] as const;

const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>("Blue");

  const incrementQuantity = useCallback(() => setQuantity((q) => q + 1), []);
  const decrementQuantity = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), []);

  const totalPrice = useMemo(() => 300 * quantity, [quantity]);

  return (
    <div className="flex flex-col gap-6 animate-in">
      <div className="space-y-4">
        <span className="inline-flex items-center justify-center px-4 py-2 w-[82px] h-[37px] rounded-[32px] border-[0.5px] border-[#BE968E] bg-transparent text-[#BE968E] text-[14px] font-semibold leading-none font-poppins">
          T-Shirt
        </span>

        <h1 className="font-poppins text-[24px] font-medium leading-[36px] text-[#020202] max-w-[524px]">
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>
      </div>

      <div className="flex flex-col items-start gap-[1px]">
        <div className="flex items-baseline gap-3">
          <span className="font-poppins text-[32px] font-bold text-[#020202]">
            ${totalPrice}.00
          </span>
          <span className="font-poppins text-[20px] font-medium text-[#999999] line-through">
            $360.00
          </span>
        </div>
        <p className="font-poppins text-[12px] text-[#666666]">
          This price is exclusive of taxes.
        </p>
      </div>

      <p className="font-poppins text-[14px] leading-[21px] text-[#020202] max-w-[510px]">
        Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-start pt-2">
          <AttributeSelect label="Type" value="Cotton" />
          <AttributeSelect label="Size" value="2XL" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <span className="font-poppins font-medium text-[20px] leading-[30px] text-[#020202]">
          Colors
        </span>
        <div className="flex flex-row items-start gap-2 md:gap-4">
          {COLOR_OPTIONS.map((color) => (
            <div key={color.label} className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedColor(color.label)}
                className={`w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-[50px] bg-[#F4F7F9] transition-all active:scale-95 flex items-center justify-center relative ${selectedColor === color.label
                  ? "border-[1.5px] border-[#020202]"
                  : "border-0"
                  }`}
                aria-label={color.label}
              >
                <div className={`w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-[57px] ${color.colorClass}`} />
              </button>
              {selectedColor === color.label && (
                <span className="font-poppins font-normal text-[14px] md:text-[16px] leading-[140%] text-[#020202]">
                  {color.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-poppins font-medium text-[20px] leading-[30px] text-[#020202]">
            Quantity
          </span>
          <span className="font-poppins font-normal text-[16px] leading-[140%] text-[#8A8A8A]">
            (${300}.00 for Piece)
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
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
          <span className="font-poppins text-[20px] font-bold text-[#020202]">
            ${totalPrice}.00
          </span>
          <div className="flex flex-col items-start gap-2 pt-4 w-full md:w-auto">
            <button
              type="button"
              className="flex h-[56px] w-full md:w-[234px] items-center justify-center gap-2 rounded-[12px] bg-[#BE968E] px-8 font-poppins text-[16px] font-semibold text-white transition-all hover:bg-[#A87F77] active:scale-[0.98]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInfo);
