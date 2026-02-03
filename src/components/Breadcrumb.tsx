"use client";

import React, { memo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="mx-auto flex h-[56px] w-full max-w-[1200px] items-center overflow-hidden rounded-[16px] border border-white/20 bg-[#ECECEC]/40 backdrop-blur-sm z-10">
      <div className="flex items-center gap-[2px] pl-[32px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <React.Fragment key={item}>
              {!isFirst && (
                <div className="flex h-6 w-6 items-center justify-center">
                  <ChevronRight
                    size={14}
                    className="text-[#020202] stroke-[2.5]"
                  />
                </div>
              )}

              {isLast ? (
                <span className="flex min-h-[24px] items-center whitespace-nowrap font-poppins text-[16px] font-medium leading-[24px] text-[#8A8A8A]">
                  {item}
                </span>
              ) : (
                <Link
                  href={isFirst ? "/" : "#"}
                  className="flex min-h-[24px] items-center whitespace-nowrap font-poppins text-[16px] font-medium leading-[24px] text-[#020202] transition-opacity hover:opacity-70"
                >
                  {item}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default memo(Breadcrumb);
