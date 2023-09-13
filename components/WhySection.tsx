import React from "react";
import Image from "next/image";

const WhySection = () => {
  return (
    <section className="flex flex-col mt-5 border-t border-grey-100">
      <div className="flex justify-center items-end w-full xl:h-screen mt-5">
        <div className="relative w-full h-[300px] xl:h-full sm:h-[590px] z-0">
          <Image
            src="/dealership_image.png"
            alt="dealership"
            fill
            className="object-right sm:object-center sm:object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default WhySection;
