import React from "react";
import Link from "next/link";

interface SlideOutMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SlideOutMenu = ({ isOpen, toggleMenu }: SlideOutMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-4/5 h-full bg-white transition-all ease-in-out duration-300 z-50 ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="menu-content">
        <button
          className={`${
            isOpen
              ? "absolute top-4 right-2"
              : "sm:hidden flex flex-col gap-1 h-6 w-6 mr-6"
          }`}
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
        <div className="menu-links spacee-y-4 flex flex-col ml-4 mt-4 space-y-4">
          <Link href="/cars">Cars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default SlideOutMenu;
