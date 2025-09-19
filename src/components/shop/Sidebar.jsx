import React from "react";
import HotDeals from "./HotDeals";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";

const Sidebar = () => {
  return (
    <div className="w-[355px] flex flex-col gap-5">
      <HotDeals />
      <PriceFilter />
      <ColorFilter />
    </div>
  );
};

export default Sidebar;
