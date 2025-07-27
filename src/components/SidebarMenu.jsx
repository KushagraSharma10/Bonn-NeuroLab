import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

const SidebarMenu = ({ isOpen, onClose }) => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Research", to: "/" },
    { link: "Team", to: "/" },
    { link: "Dissertations", to: "/" },
    { link: "Press", to: "/" },
    { link: "Awards", to: "/" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 sbg-black bg-opacity-10 backdrop-blur-[10px]  z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-4 py-6">
          <RxCross2 className="absolute top-5 right-5 text-2xl"
            onClick={onClose} />
          <nav className="flex flex-col mt-10 justify-between gap-4 ">
            {links.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="text-base text-black hover:text-[#2E86C1] font-medium transition duration-200"
                onClick={onClose}
              >
                {item.link}
              </Link>
            ))}
          </nav>
          <button className="text-sm mt-6 w-fit px-3 py-2 rounded-md font-semibold bg-[#F0F2F5] text-gray-600 hover:bg-gray-200 transition">
            DE | EN
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
