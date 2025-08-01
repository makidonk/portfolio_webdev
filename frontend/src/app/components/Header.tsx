import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-background flex flex-row justify-between h-[90px]">
      <div className="flex justify-center align-center p-[20px]">
        <img
          src="./logo/logo_statisk.gif"
          alt="Mathilda Logo"
          className={` object-contain`}
        />
      </div>
      {/* for when i have more projects: */}
     {/*  <div className="h-full">
        <Navbar/>
      </div> */}
      
    </header>
  );
}
