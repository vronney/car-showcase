import React from "react";
import Image from "next/image";

const WhySection = () => {
  return (
    <section className="flex flex-col sm:flex-row relative mt-5 max-h-[850px] h-full sm:h-[500px]">
      <div className="flex flex-col justify-start items-start w-full sm:w-[50%] order-1">
        <div className="m-4">
          <h1 className="text-3xl font-bold text-left">Why Choose Us?</h1>
        </div>
        <div className="mt-4 ml-8 mr-2 sm:mr-0">
          <h3 className="text-2xl text-left uppercase">Service is our focus</h3>
          <p className="font-medium text-lg mt-4">
            At Car HUb , your satisfaction is important to us. We're here to
            help you find the vehicle that matches your lifestyle and budget.
          </p>
        </div>
        <div className="mt-4 ml-8 mr-2 sm:mr-0">
          <h3 className="text-2xl text-left uppercase">We Can Finance Most</h3>
          <p className="font-medium text-lg mt-4">
            We offer a varienty of car financing programs to meet the individual
            needs of our customers.
          </p>
        </div>
        <div className="mt-4 ml-8 mr-2 sm:mr-0">
          <h3 className="text-2xl text-left uppercase">Warranty Protection</h3>
          <p className="font-medium text-lg mt-4">
            We provide our customers with a variety of extended warranty plans
            to protect their used car after a purchase has been made.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap content-center w-full sm:w-[50%] h-full relative sm:absolute sm:right-0 order-2">
        <img
          src="customer_1.png"
          alt="image1"
          className="w-[75%] h-[75%] md:h-[50%] lg:h-[75%] mx-2 mt-8 sm:mt-0"
        />
        {/* <img src="customer_2.png" alt="image2" className="w-1/2 mx-2" />
        <img src="customer_3.png" alt="image3" className="w-1/2 mx-2" />
        <img src="customer_4.png" alt="image3" className="w-1/2 mx-2" />
        <img src="customer_5.png" alt="image3" className="w-1/2 mx-2" /> */}
      </div>
    </section>
  );
};
export default WhySection;
