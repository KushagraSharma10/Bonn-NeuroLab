import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Research", to: "/" },
    { link: "Team", to: "/" },
    { link: "Dissertations", to: "/" },
    { link: "Press", to: "/" },
    { link: "Awards", to: "/" },
  ];

  return (
    <div className="flex items-center justify-between px-3 py-4 md:px-8 border-b-[1px] border-gray-200">
      <h1 className="text-lg md:text-xl font-semibold md:font-bold">
        Klinische Funktionelle Bildgebung
      </h1>
      <div className="hidden md:flex links items-center gap-8">
      <div className="flex links items-center gap-8">
        {links.map((link, idx)=>{
          return (
            <Link to={link.to} key={idx} className="">
              {link.link}
            </Link>
          );
        })}
      </div>
      <button className="text-sm px-3 py-2 rounded-md font-semibold bg-[#F0F2F5] text-gray-600">DE | EN</button>
      </div>
      <RxHamburgerMenu className="md:hidden  text-lg" />
    </div>
  );
};

export default Navbar;
