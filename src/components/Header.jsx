import React, { useState } from "react";
import logoIcon from "../asset/Icon.svg";
import { Menu, ShoppingCart, X } from "lucide-react";

const navItems = ["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-[60px] md:px-0 md:py-0 px-4 border-b-1 border-neutral-300 flex items-center justify-between font-[poppins]">
      <div className="flex items-center gap-2">
        <img
          src={logoIcon}
          alt="logo"
          className="md:w-[40px] xl:w-[51px] h-[44px]"
        />
        <h1 className="text-[#22262A] font-[700] md:text-[20px] xl:text-[24px]">
          E-Comm
        </h1>
      </div>
      <div className="hidden md:block md:w-[400px] lg:w-[600px] xl:w-[804px] h-[40px] ">
        <ul className="flex items-center justify-between w-full h-full">
          {navItems.map((item, index) => (
            <li
              className="md:text-[16px] lg:text-[18px] xl:text-[20px] font-[500] text-[#22262A] "
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex md:w-[140px] lg:w-[170px] h-[40px] items-center justify-between font-[Proxima Nova] ">
        <ShoppingCart size={20} className=" " />
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
        <div className="absolute p-4 left-0 top-[65px] md:hidden w-full bg-white shadow-md">
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
