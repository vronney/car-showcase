"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import SlideOutMenu from "./SlideOutMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <SlideOutMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div
        className={`${
          menuOpen
            ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      <header className="w-full z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <button
            className="sm:hidden flex flex-col gap-1 h-6 w-6 mr-6"
            onClick={toggleMenu}
          >
            <div className="h-1 w-6 bg-black"></div>
            <div className="h-1 w-6 bg-black"></div>
            <div className="h-1 w-6 bg-black"></div>
          </button>
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Car Hub Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>

          <div className={`hidden sm:flex gap-12 ${menuOpen && "opacity-50"}`}>
            <Link href="/cars">Cars</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
