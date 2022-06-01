import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const index = () => {
  return (
    <div className="text-white bg-primary font-open-sans">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
};

export default index;
