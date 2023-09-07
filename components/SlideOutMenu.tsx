import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SlideOutMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SlideOutMenu = ({ isOpen, toggleMenu }: SlideOutMenuProps) => {
  return (
    <div
      className={` ${
        isOpen
          ? "left-0 fixed top-0 w-4/5 h-full bg-white transition-all ease-in-out duration-300 z-50"
          : "sm:hidden -left-full"
      }`}
    >
      <div className={`${isOpen ? "menu-content h-full mt-4" : "hidden"}`}>
        <Link href="/" className="flex justify-start ml-4 items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <button className="absolute top-4 right-2" onClick={toggleMenu}>
          <div className="h-1 w-6 bg-black rotate-45 translate-y-1.5"></div>
          <div className={`h-1 w-6 bg-black ${isOpen && "opacity-0"}`}></div>
          <div className="h-1 w-6 bg-black -rotate-45 -translate-y-0.5"></div>
        </button>
        <div className="menu-links flex flex-col ml-4 mt-6 space-y-4">
          <Link href="/cars" className="text-lg" onClick={toggleMenu}>
            Cars
          </Link>
          <Link href="/about" className="text-lg">
            About
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
        </div>
        <div className="flex justify-items-center w-full absolute bottom-0">
          <button
            type="button"
            className="mb-4 rounded-full bg-primary-blue text-white px-4 py-2 mx-auto"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideOutMenu;
