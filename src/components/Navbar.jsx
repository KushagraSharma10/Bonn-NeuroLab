import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Home", to: "/" },
    { link: "Home", to: "/" },
    { link: "Home", to: "/" },
  ];

  return (
    <div className="flex items-center justify-between px-3 py-4 md:px-8 border-b-[1px] border-gray-200">
      <h1 className="text-lg md:text-xl font-semibold md:font-bold">
        Klinische Funktionelle Bildgebung
      </h1>
      <div className="hidden md:flex links  items-center">
        {links.map((link, idx)=>{
                 
        })}
      </div>
      <RxHamburgerMenu className="md:hidden  text-lg" />
    </div>
  );
};

export default Navbar;
