import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 py-4 border-b">
      <h1 className="text-lg font-semibold">
        Klinische Funktionelle Bildgebung
      </h1>
      <div className="hidden md:flex links  items-center">
        
      </div>
      <RxHamburgerMenu className="text-lg" />
    </div>
  );
};

export default Navbar;
