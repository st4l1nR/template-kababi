import React from "react";
import Link from 'next/link'
import NavbarLink from '../NavbarLink'
import {Phone, ArrowRight} from 'react-feather'

const index = () => {
  return (
    <div className="items-center hidden w-full h-24 px-5 mx-auto md:flex max-w-7xl font-open-sans">
      <div className="basis-1/4">
        <Link href="/">
          <img className="h-12" src="/icons/03_Home-Logo.svg" alt="" />
        </Link>
      </div>
      <div className="flex justify-center flex-1 space-x-10 ">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/about-us">About us</NavbarLink>
        <NavbarLink href="/contact-us">Contact Us</NavbarLink>
        <NavbarLink href="/menu">Menu</NavbarLink>
      </div>
      <div className="flex items-center justify-end space-x-10 ">
        <div className="flex space-x-2">
          <Phone className="w-5 text-secondary" />
          <span>+012 (345) 6789</span>
        </div>
        <Link href="/reservation">
          <a className="flex w-40 space-x-1 text-sm h-14 btn-primary">
            <span>BOOK TABLE</span>
            <ArrowRight className="w-5" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default index;
