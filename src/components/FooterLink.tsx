import Link from "next/link";
import React, { memo } from "react";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
    return (
        <li>
            <Link
                href={href}
                className="font-poppins text-sm text-white hover:text-[#BE968E] transition-colors"
            >
                {children}
            </Link>
        </li>
    );
};

export default memo(FooterLink);
