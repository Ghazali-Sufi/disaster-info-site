"use client"; // Add this line to mark the component as a client component

import Link from "next/link";
import { useState } from "react";
// import '../app/globals.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="container mx-auto px-14  bg-amber-50 pt-[20px] pb-[20px] flex justify-between items-center m-0">
    //     <h1 className="text-[24px] font-[600]">Somalia Disaster Information</h1>
    //     <div className="text-xl"> <Link href="/" className="hover-border-orange mr-4">Home</Link> | <Link href="/about" className="hover-border-orange ml-4">About</Link></div>
    // </nav>

    // <nav className="container mx-auto px-4 sm:px-6 md:px-14 bg-amber-50 pt-[20px] pb-[20px] flex flex-col md:flex-row justify-between items-center max-w-full">
    //   <h1 className="text-[24px] font-[600] text-center md:text-left">
    //     Somalia Disaster Information
    //   </h1>
    //   <div className="text-xl flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
    //     <Link href="/" className="hover-border-orange mr-4 mb-2 md:mb-0">
    //       Home
    //     </Link>
    //     <span className="hidden md:block">|</span>{" "}
    //     {/* Hidden on small screens */}
    //     <Link href="/about" className="hover-border-orange ml-4 mb-2 md:mb-0">
    //       About
    //     </Link>
    //   </div>
    // </nav>

    <>
    <nav className="container mx-auto px-4 sm:px-6 md:px-14 bg-amber-50 pt-[20px] pb-[20px] flex justify-between items-center max-w-full">
      {/* Logo */}
      <h1 className="text-[24px] font-[600] text-center md:text-left">Somalia Disaster Information</h1>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-3xl">
          {isOpen ? "×" : "☰"} {/* Show '×' when menu is open, else '☰' */}
        </button>
      </div>

      {/* Navigation Links (visible on all screens, and responsive on small screens) */}
      <div className={`md:flex ${isOpen ? "block" : "hidden"} flex-col md:flex-row items-center md:space-x-4 text-center md:text-left pt-4`}>

        <Link href="/" className="hover-border-orange mr-4 mb-2 md:mb-0">Home</Link>
        <span className="hidden md:block">|</span> {/* Hidden on small screens */}
        <Link href="/about" className="hover-border-orange ml-4 mb-2 md:mb-0">About</Link>
      </div>
    </nav>

    {/* Full-Screen Sliding Menu */}
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50 md:hidden`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-3xl">
          ×
        </button>
      </div>
      <div className="flex flex-col items-center justify-start h-full space-y-4">
        <Link href="/" className="text-xl">
          Home
        </Link>
        <Link href="/about" className="text-xl">
          About
        </Link>
      </div>
    </div>
  </>
  );
};

export default NavBar;
