"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const WhySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/customer_1.png",
    "/customer_2.png",
    "/customer_3.png",
    "/customer_4.png",
    "/customer_5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row relative mt-5 h-full padding-x max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-center sm:justify-start sm:items-start w-full sm:w-[50%] order-1">
        <div className="my-4">
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Why Choose Us?
          </h1>
        </div>
        <div className="mt-4 lg:mx-4 lg:ml-8 sm:mr-2">
          <h3 className="text-2xl text-left uppercase">Service is our focus</h3>
          <p className="font-medium text-lg mt-4">
            At CarHub , your satisfaction is important to us. We're here to help
            you find the vehicle that matches your lifestyle and budget.
          </p>
        </div>
        <div className="mt-4 lg:mx-4 lg:ml-8 sm:mr-2">
          <h3 className="text-2xl text-left uppercase">We Can Finance Most</h3>
          <p className="font-medium text-lg mt-4">
            We offer a varienty of car financing programs to meet the individual
            needs of our customers.
          </p>
        </div>
        <div className="mt-4 lg:mx-4 lg:ml-8 sm:mr-2">
          <h3 className="text-2xl text-left uppercase">Warranty Protection</h3>
          <p className="font-medium text-lg mt-4">
            We provide our customers with a variety of extended warranty plans
            to protect their used car after a purchase has been made.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap content-center w-full sm:w-[50%] h-full relative sm:absolute sm:right-0 order-2 lg:rotate-[4deg] padding-x sm:p-4 md:object-cover">
        <Image
          src={images[currentImageIndex]}
          alt={`customer-${currentImageIndex}`}
          width={500}
          height={500}
          className="mx-2 mt-8 border-8 border-[#3b3c98] sm:mt-0 md:h-full"
        />
      </div>
    </section>
  );
};
export default WhySection;
