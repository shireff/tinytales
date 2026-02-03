"use client";

import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleBanner from "@/components/PageTitleBanner";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import RatingSummary from "@/components/RatingSummary";
import ReviewList from "@/components/ReviewList";
import SimilarItems from "@/components/SimilarItems";

const BREADCRUMB_ITEMS = [
  "Home",
  "Our Category",
  <span key="last">
    <span className="md:hidden">T-Shirt</span>
    <span className="hidden md:inline">Product Details</span>
  </span>,
];

const PRODUCT_THUMBNAILS = [
  "/products/product-1.png",
  "/products/product-2.png",
  "/products/product-3.png",
];

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1A1A1A] overflow-x-hidden">
      <Header />

      <main>
        <PageTitleBanner />

        <div className="w-full flex justify-center py-8">
          <div className="w-full max-w-300 px-4">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
          </div>
        </div>

        <div className="mx-auto w-full max-w-300 pt-12 pb-12 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery
              mainImage="/products/main-product.png"
              thumbnails={PRODUCT_THUMBNAILS}
            />
            <div className="min-h-0 flex flex-col">
              <ProductInfo />
            </div>
          </div>

          <div className="w-full max-w-300 mx-auto mt-20">
            <RatingSummary />
            <ReviewList />

            <Suspense
              fallback={<div className="py-20 min-h-100" aria-hidden="true" />}
            >
              <SimilarItems />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
