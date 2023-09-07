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
      <div className="menu-content h-full mt-4">
        <Link href="/" className="flex justify-start ml-4 items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className={`${isOpen ? "object-contain" : "hidden"}`}
          />
        </Link>

        <div className={`hidden sm:flex gap-12 ${isOpen && "opacity-50"}`}>
          <Link href="/cars">Cars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button
          className={`${isOpen ? "absolute top-4 right-2" : "hidden"}`}
          onClick={toggleMenu}
        >
          <div
            className={`h-1 w-6 bg-black ${
              isOpen && "rotate-45 translate-y-1.5"
            }`}
          ></div>
          <div className={`h-1 w-6 bg-black ${isOpen && "opacity-0"}`}></div>
          <div
            className={`h-1 w-6 bg-black ${
              isOpen && "-rotate-45 -translate-y-0.5"
            }`}
          ></div>
        </button>
        <div
          className={`${
            isOpen ? "menu-links flex flex-col ml-4 mt-4 space-y-4" : "hidden"
          }`}
        >
          <Link href="/cars">Cars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-items-center w-full absolute bottom-0">
          <button
            type="button"
            className={`${
              isOpen
                ? "mb-4 rounded-full bg-primary-blue text-white px-4 py-2 mx-auto"
                : "hidden"
            }`}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideOutMenu;
