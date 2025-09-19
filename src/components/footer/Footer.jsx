import React from "react";
import iconImg from "../../asset/Icon.svg";
import { Facebook, Twitter } from "lucide-react";
import visaImg from "../../asset/images/visa.jpg"
import paypalImg from "../../asset/images/PayPal.png";
import westernUnionImg from "../../asset/images/western-union.png";
import masterCardImg from "../../asset/images/mastercard.png";

const footerLinks = [
  {
    id: 1,
    title: "Information",
    links: [
      {
        id: 101,
        linkText: "About Us",
        url: "/",
      },
      {
        id: 102,
        linkText: "Information",
        url: "/",
      },
      {
        id: 103,
        linkText: "Privacy Policy",
        url: "/",
      },
      {
        id: 104,
        linkText: "Terms & Conditions",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    links: [
      {
        id: 101,
        linkText: "About Us",
        url: "/",
      },
      {
        id: 102,
        linkText: "Information",
        url: "/",
      },
      {
        id: 103,
        linkText: "Privacy Policy",
        url: "/",
      },
      {
        id: 104,
        linkText: "Terms & Conditions",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    title: "My Account",
    links: [
      {
        id: 101,
        linkText: "About Us",
        url: "/",
      },
      {
        id: 102,
        linkText: "Information",
        url: "/",
      },
      {
        id: 103,
        linkText: "Privacy Policy",
        url: "/",
      },
      {
        id: 104,
        linkText: "Terms & Conditions",
        url: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Our Offers",
    links: [
      {
        id: 101,
        linkText: "About Us",
        url: "/",
      },
      {
        id: 102,
        linkText: "Information",
        url: "/",
      },
      {
        id: 103,
        linkText: "Privacy Policy",
        url: "/",
      },
      {
        id: 104,
        linkText: "Terms & Conditions",
        url: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full mt-5 bg-[#BCDDFE] px-4 py-3 lg:py-0 md:px-10 md:pt-10 lg:pt-20 lg:px-20 xl:px-30 xl:pt-30">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-3 lg:h-50 ">
        <div className="">
          <div className="flex items-center gap-2">
            <img className="w-[35px]" src={iconImg} alt="" />
            <h1 className="text-[#22262A] font-[700] text-[18px]">E-comm</h1>
          </div>
          <div className="w-full md:w-65 mt-5">
            <p className=" text-[#22262A] font-[400] text-[12px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-[#22262A] font-[500] text-[22px]">Follow Us</h1>
          <p className="w-full mt-5 md:w-65 text-[#22262A] text-[12px]">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex items-center gap-8 mt-5">
            <Facebook size={20} fill="" className="cursor-pointer" />
            <Twitter size={20} fill="" className="cursor-pointer" />
          </div>
        </div>
        <div className="">
          <h1 className="text-[#22262A] font-[500] text-[22px]">Contact Us</h1>
          <div className="mt-5 w-65 flex flex-col text-[#22262A] ">
            <span>E-Comm, </span>
            <span> 4578 Marmora Road,</span>
            <span>Glasgow D04 89GR</span>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:h-50">
        {footerLinks.map((item) => (
          <div key={item.id} className="mt-10 w-full h-full ">
            <h1 className="text-[22px] font-[400] text-[#22262A] ">
              {item.title}
            </h1>
            <div className="mt-6">
              {item.links.map((link) => (
                <h1
                  className="text-[14px] font-[400] text-[#262626] "
                  key={link.id}
                  href="#"
                >
                  {link.linkText}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between w-full h-20 py-5 border-t-2 border-[#F6F7F8] mt-10">
        <h1 className="w-[60%] md:w-fit text-[#9299a0] text-[12px] md:text-[14px] font-[400]">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </h1>
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <img className="h-6 md:h-8" src={visaImg} alt="visa" />
          <img className="h-6 md:h-8" src={masterCardImg} alt="mastercard" />
          <img className="h-6 md:h-8" src={paypalImg} alt="paypalImg" />
          <img className="h-6 md:h-8" src={westernUnionImg} alt="western union image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
