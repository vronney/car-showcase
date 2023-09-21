"use client";

import React from "react";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WelcomeWrap = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cars");
  };

  return (
    <section className="flex flex-col border-t mt-5 border-grey-100 text-black-100 font-extrabold relative p-4 justify-center sm:px-16 max-w-[1440px] mx-auto">
      <div className="absolute left-0 w-full h-full xl:h-full z-0 opacity-60">
        <Image
          src="/dealership_image.png"
          alt="dealership"
          fill
          className="object-cover sm:object-fill md:object-cover lg:object-fill xl:object-top"
        />
      </div>
      <div className="flex flex-col text-center my-4 z-10">
        <h1 className="text-2xl flex flex-col uppercase">
          <span className="text-base">Welcome to</span>
          <span className="text-[#3b3c98] font-bold">CarHub Dealership</span>
        </h1>
      </div>
      <div className="flex flex-col flex-wrap justify-between sm:flex-row z-10">
        <div className="text-justify order-2 flex-1 mb-4 p-[10px] sm:text-left sm:w-1/3">
          <p>
            Welcome to CarHub Dealership, home of the best used cars in San
            Antonio, TX. We have worked hard to build a reputation for selling
            high quality used cars backed by extraordinary service. Most of our
            business is done with individuals who’ve never even driven the
            vehicle or seen it in person prior to purchasing. Only two things
            make that possible: unequaled quality and a high level of service.
          </p>
        </div>
        <div className="text-justify order-2 flex-1 mb-4 p-[10px] sm:text-left sm:w-1/3">
          <p>
            Just tap the link below to browse our current inventory and learn
            more about us. If you have any questions please feel free to call us
            at
            <span className="text-[#3b3c98] font-bold">(210) 314-4774</span>.
          </p>
          <div className="flex justify-center">
            <CustomButton
              title="Find Your Car"
              btnType="button"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="text-justify order-last flex-1 mb-4 p-[10px] uppercase bg-primary-blue text-white sm:text-left sm:order-1 sm:w-1/3">
          <div className="bus_hours">
            <h2 className="flex justify-center sm:justify-start">
              Business Hours
            </h2>
            <ul className="my-4 w-full sm:w-[90%]">
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Sunday:</span> Closed
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Monday:</span> 10a - 7p
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Tuesday:</span> 10a - 7p
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Wednesday:</span> 10a - 7p
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Thursday:</span> 10a - 7p
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Friday:</span> 9:30a - 7:30p
              </li>
              <li className="flex justify-between sm:text-sm lg:text-base">
                <span className="day">Saturday:</span> 9:30a - 7:30p
              </li>
            </ul>
          </div>
          <div className="bus_location text-center sm:text-left">
            <h3>Our Location</h3>
            <p>
              11723 IH 35N
              <br />
              San Antonio, TX 78233
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeWrap;
