import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "react-feather";
import MenuDrawer from "./MenuDrawer";
import { Transition } from "@headlessui/react";

const index = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="flex items-center justify-between h-24 px-5 md:hidden">
      <Link href="/">
        <img className="h-12" src="/icons/03_Home-Logo.svg" alt="" />
      </Link>
      <button onClick={() => setIsMenu(true)}>
        <Menu className="w-8 h-8 text-secondary" />
      </button>

      {isMenu && <MenuDrawer {...{ isMenu, setIsMenu }} />}
      <Transition
        show={isMenu}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        dsadasda
      </Transition>
    </div>
  );
};

export default index;
