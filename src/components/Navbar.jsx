import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Research", to: "/research" },
    { link: "Team", to: "/team" },
    { link: "Dissertations", to: "/dissertations" },
    { link: "Press", to: "/press" },
    { link: "Awards", to: "/awards" },
  ];

  return (
    <div className="flex items-center justify-between px-3 py-4 md:px-8 border-b border-gray-200">
      <h1 className="text-lg md:text-xl font-semibold md:font-bold">
        Klinische Funktionelle Bildgebung
      </h1>

      <nav className="hidden md:flex items-center gap-8">
        {links.map(({ link, to }, idx) => (
          <Link to={to} key={idx} className="">
            {link}
          </Link>
        ))}

        <button className="text-sm px-3 py-2 rounded-md font-semibold bg-[#F0F2F5] text-gray-600 hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out">
          DE | EN
        </button>
      </nav>

      <button aria-label="Open menu" className="md:hidden">
        <RxHamburgerMenu className="text-lg" />
      </button>
    </div>
  );
};

export default Navbar;
