import React from "react";
import { X as Close } from "react-feather";
import NavbarLink from "../../NavbarLink";
import { Transition } from "@headlessui/react";

type props = {
  isMenu: boolean;
  setIsMenu: any;
};

const index = ({ isMenu, setIsMenu }: props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="h-full max-w-xs p-8 bg-tertiary">
        <div className="flex justify-end">
          <button onClick={() => setIsMenu(false)}>
            <Close className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col space-y-3 divide-y divide-white divide-opacity-25">
          <NavbarLink className="pt-3" href="/">
            Home
          </NavbarLink>
          <NavbarLink className="pt-3" href="/about-us">
            About us
          </NavbarLink>
          <NavbarLink className="pt-3" href="/contact-us">
            Contact Us
          </NavbarLink>
          <NavbarLink className="pt-3" href="/menu">
            Menu
          </NavbarLink>
          <div></div>
        </div>

      </div>
    </div>
  );
};

export default index;
