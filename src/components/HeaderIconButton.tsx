import React, { memo } from "react";
import Image from "next/image";

interface HeaderIconButtonProps {
    src: string;
    alt: string;
    badge?: number;
    onClick?: () => void;
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({
    src,
    alt,
    badge,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center p-1 transition-all hover:opacity-70"
        >
            <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
                className="object-contain"
            />
            {badge !== undefined && badge > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full border border-white bg-[#BE968E] text-[10px] font-bold text-white">
                    {badge}
                </span>
            )}
        </button>
    );
};

export default memo(HeaderIconButton);
