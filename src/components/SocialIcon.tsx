import React, { memo } from "react";
import Image from "next/image";

interface SocialIconProps {
    src: string;
    alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
    return (
        <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-white/20 active:scale-95"
            aria-label={alt}
        >
            <Image src={src} alt={alt} width={20} height={20} className="object-contain" />
        </button>
    );
};

export default memo(SocialIcon);
