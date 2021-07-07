import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavOpening = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeMenuOnLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="flex flex-row justify-between items-center w-full">
      <button className="focus:outline-none focus:border-transparent">
        <div className="ml-6 md:hidden block text-md">
          <Image
            onClick={handleNavOpening}
            height={20}
            width={20}
            layout="intrinsic"
            src={"/images/siteImages/hamburger.png"}
          />
        </div>
      </button>
      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute pt-0 top-12 left-0 flex-col w-full p-6 -space-y-0.5 md:space-y-0 bg-white shadow-md rounded-lg z-20 md:relative md:top-0 md:z-0 md:flex md:flex-row md:space-x-3 md:rounded-none md:shadow-none md:bg-transparent md:p-6 md:justify-end text-xs tracking-widest  lg:mr-32 md:ml-1 lg:ml-1 xl:ml-0 xl:mr-72`}
      >
        <li onClick={closeMenuOnLinkClick}>
          <Link href="/">HOME</Link>
        </li>
        <li onClick={closeMenuOnLinkClick}>
          <Link href="/posts">BLOG</Link>
        </li>
        <li className="text-xs tracking-tighter whitespace-nowrap hidden md:block">
          Our little life
        </li>
      </ul>

      <ul className="tracking-widest text-xl mx-5 my-5 md:w-full items-center">
        <li
          onClick={closeMenuOnLinkClick}
          className="flex flex-row justify-start md:static"
        >
          <Link href="/">
            <a className="w-1/2 md:w-full">
              <Logo />
            </a>
          </Link>
        </li>
      </ul>

      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute top-20 left-0 z-20 flex-col w-full -space-y-0.5 md:space-y-0 bg-white shadow-md rounded-lg p-6 md:relative md:top-0 md:flex md:flex-row md:space-x-3 md:rounded-none md:shadow-none md:bg-transparent  lg:ml-32 xl:ml-72 md:p-6 pt-0 text-xs tracking-widest md:justify-start`}
      >
        <li onClick={closeMenuOnLinkClick}>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li onClick={closeMenuOnLinkClick} className="whitespace-nowrap">
          <Link href="/socialmedia">SOCIAL MEDIA</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
