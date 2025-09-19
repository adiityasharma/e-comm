import React, { useEffect, useState } from "react";
import logoIcon from "../../asset/Icon.svg";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Shop",
    url: "/shop",
  },
  {
    id: 3,
    text: "Bag",
    url: "/category/bag",
  },
  {
    id: 4,
    text: "Sneakers",
    url: "/category/sneakers",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`sticky w-full h-[60px] md:px-4 lg:px-0 md:py-0 px-4 bg-white border-b-1 border-neutral-300 flex items-center justify-between font-[poppins] z-999`}
    >
      <div className="flex items-center gap-2">
        <img
          src={logoIcon}
          alt="logo"
          className="md:w-[40px] xl:w-[51px] h-[44px]"
        />
        <Link
          to={"/"}
          className="text-[#22262A] font-[700] md:text-[20px] xl:text-[24px]"
        >
          E-Comm
        </Link>
      </div>
      <div className="hidden md:block md:w-[400px] lg:w-[600px] xl:w-[804px] h-[40px] ">
        <ul className="flex items-center justify-between w-full h-full">
          {navItems.map((item) => (
            <Link
              to={item.url}
              className="md:text-[16px] lg:text-[18px] xl:text-[20px] font-[500] text-[#22262A] "
              key={item.id}
            >
              {item.text.toUpperCase()}
            </Link>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex md:w-[140px] lg:w-[170px] h-[40px] items-center justify-between font-[Proxima Nova] ">
        <Link to={"/cart"}>
          <ShoppingCart size={20} className="hover:text-blue-400" />
        </Link>
        <div className=" flex items-center gap-2 text-[20px] ">
          <h1 className="md:text-[16px] lg:text-[20px]">Items</h1>
          <p className="text-[#262626] opacity-50">$0.00</p>
        </div>
      </div>
      {/* mobile view nav */}
      <div className="md:hidden flex gap-5 items-center">
        <div className=" items-center justify-between font-[Proxima Nova] ">
          <ShoppingCart size={20} className=" " />
        </div>

        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute p-4 left-0 top-[65px] md:hidden w-full h-[100vh] bg-white shadow-md ">
          <ul className="flex flex-col gap-3 w-full h-fit">
            {navItems.map((item, index) => (
              <li
                className="text-[25px] font-[500] text-[#22262A] "
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
