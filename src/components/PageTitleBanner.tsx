"use client";

import React, { memo } from "react";
import Image from "next/image";

interface PageTitleBannerProps {
  title?: string;
  children?: React.ReactNode;
}

const PageTitleBanner: React.FC<PageTitleBannerProps> = ({
  title = "Product Details",
  children
}) => {
  const isDefaultProductDetails = title === "Product Details";

  return (
    <section className="relative h-[284px] w-full overflow-hidden bg-[#F5F5F5]">
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center">

        <div className="absolute top-[127px] left-[406px] z-10 hidden h-[120px] w-[628px] md:block overflow-hidden">
          {isDefaultProductDetails ? (
            <Image
              src="/Product-Details.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          ) : (
            <h1 className="font-poppins text-[80px] font-bold leading-none text-[#1A1A1A] text-center opacity-10">
              {title}
            </h1>
          )}
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center px-4 pt-[40px]">
          <h2 className="font-poppins text-[24px] font-semibold leading-tight text-[#1A1A1A] md:text-[32px]">
            <span className="md:hidden">
              {isDefaultProductDetails ? "T-Shirt" : title}
            </span>
            <span className="hidden md:inline">
              {title}
            </span>
          </h2>

          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default memo(PageTitleBanner);