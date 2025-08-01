"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full">
      {/* no hamburger screen */}
      <nav className="hidden md:block font-normal text-black">
        <Link href="/" className="  hover:font-extrabold transition-all">
          HEM
        </Link>
      </nav>

      {/* hamburger screen */}
      <button
        className="md:hidden h-[90px] p-[20px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerIcon className="h-full" />
      </button>
      {/* Dropdown menu */}

      <div
        className={`md:hidden overflow-hidden absolute bg-background left-0 w-full flex flex-col items-center space-y-[10px]  text-hamburger-nav text-black
    transition-all duration-800 origin-top 
    ${isOpen ? "max-h-screen " : "max-h-0  pointer-events-none"}
  `}
      >
        <Link href="/" className=" font-normal hover:font-bold">
          home
        </Link>
        <Link href="/projects" className=" font-normal hover:font-bold">
          project
        </Link>
        <Link
          href="/contact"
          className=" font-normal hover:font-bold pb-[20px]"
        >
          contact
        </Link>
      </div>
    </div>
  );
}
