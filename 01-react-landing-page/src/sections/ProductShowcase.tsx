"use client";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {

  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="md:max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product" className="mt-10" />
          <motion.img
            src={pyramid.src}
            alt="Pyramid"
            width={262}
            height={262}
            className="absolute hidden md:block -top-32 -right-36"
            style={{
              translateY: translateY
            }}
          />
          <motion.img
            src={tube.src}
            alt="Tube"
            width={248}
            height={248}
            className="absolute hidden md:block bottom-24 -left-36 "
            style={{
              translateY: translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
