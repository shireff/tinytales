"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import FooterLink from "./FooterLink";
import React, { memo } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#020202] overflow-hidden min-h-80.75 pb-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/footer/footer-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#020202]/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-360 px-6 md:px-15 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-12 md:pt-14">
          <div className="flex flex-col gap-6 max-w-85">
            <Link href="/" className="inline-block">
              <Image
                src="/footer/footer-logo.png"
                alt="Tinytales Logo"
                width={66}
                height={51}
                className="object-contain w-[65.95px] h-12.75"
              />
            </Link>
            <p className="font-poppins text-sm text-white leading-[1.6]">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div className="flex flex-row md:flex-col justify-between md:justify-start gap-8 md:gap-10">
            <div className="flex flex-col gap-6 lg:hidden">
              <h4 className="font-poppins font-bold text-base text-white underline underline-offset-8 decoration-[#BE968E] decoration-2 text-nowrap">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3 font-poppins text-[13px] text-white">
                <li className="flex items-center gap-2">
                  <Image
                    src="/footer/contact-icons/ic_round-phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>+87 01928491</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/footer/contact-icons/mdi_gmail.png"
                    alt="Email"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>Named@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/footer/contact-icons/gridicons_location.png"
                    alt="Location"
                    width={20}
                    height={20}
                    className="object-contain mt-0.5"
                  />
                  <span className="max-w-27.5 md:max-w-none">
                    381, cairo, egypt
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-poppins font-bold text-base text-white underline underline-offset-8 decoration-[#BE968E] decoration-2 text-nowrap">
                Let Us Help
              </h4>
              <ul className="flex flex-col gap-3">
                <FooterLink href="#">My Account</FooterLink>
                <FooterLink href="#">FAQs</FooterLink>
                <FooterLink href="#">Contact & Support</FooterLink>
                <FooterLink href="#">Categories</FooterLink>
                <FooterLink href="#">All Products</FooterLink>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-base text-white underline underline-offset-8 decoration-[#BE968E] decoration-2">
              Policies
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">Refund Policy</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Cancellation Policy</FooterLink>
              <FooterLink href="#">Terms and Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h4 className="font-poppins font-bold text-base text-white underline underline-offset-8 decoration-[#BE968E] decoration-2 text-nowrap">
                Send Email
              </h4>
              <div className="relative flex h-[62px] w-full max-w-[369px] items-center rounded-[12px] border border-black/10 bg-white px-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#020202] placeholder:text-[#8A8A8A] focus:outline-none"
                />
                <button
                  type="button"
                  className="ml-2 flex h-[46px] w-[80px] shrink-0 items-center justify-center rounded-[12px] border-[0.5px] border-black/10 bg-[#BE968E] font-poppins text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Send
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-poppins font-bold text-base text-white underline underline-offset-8 decoration-[#BE968E] decoration-2 text-nowrap">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-4">
                <SocialIcon
                  src="/footer/icons/eva_facebook-fill.png"
                  alt="Facebook"
                />
                <SocialIcon src="/footer/icons/mdi_twitter.png" alt="Twitter" />
                <SocialIcon
                  src="/footer/icons/ri_instagram-fill.png"
                  alt="Instagram"
                />
                <SocialIcon
                  src="/footer/icons/akar-icons_linkedin-v2-fill.png"
                  alt="LinkedIn"
                />
                <SocialIcon
                  src="/footer/icons/icon-park_telegram.png"
                  alt="Telegram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
