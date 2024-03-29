"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cars");
  };

  return (
    <div className="hero">
      <div className="flex-1 lg:pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
