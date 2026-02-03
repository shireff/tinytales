"use client";

import React, { memo } from "react";
import { ChevronDown } from "lucide-react";

interface AttributeSelectProps {
    label: string;
    value: string;
}

const AttributeSelect: React.FC<AttributeSelectProps> = ({ label, value }) => {
    return (
        <div className="relative w-full sm:w-74.75">
            <span className="absolute -top-4.25 left-3 z-10 flex h-8.5 items-center justify-center bg-white px-2 font-poppins text-[14px] font-semibold text-[#020202]">
                {label}
            </span>

            <div className="group relative flex h-11.25 cursor-pointer items-center justify-between rounded-[10px] border-[0.5px] border-[#020202] bg-white px-4 transition-colors hover:bg-slate-50">
                <span className="font-poppins text-[15px] font-medium capitalize text-[#020202]">
                    {value}
                </span>

                <ChevronDown
                    size={16}
                    className="text-[#999999] transition-colors group-hover:text-[#020202] stroke-[2.5]"
                />
            </div>
        </div>
    );
};

export default memo(AttributeSelect);
