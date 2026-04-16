import React from 'react';
import logoImg from "@/assets/image/logo.png"
import Image from "next/image"
import MyLink from "./MyLink";
import { CiHome } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home', icon: CiHome },
    { href: '/timelines', label: 'Timeline', icon: RiTimeLine },
    { href: '/stats', label: 'Stats', icon: TfiStatsUp },
  ]

  return (
    <nav className="navbar bg-base-100 container mx-auto  px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <Image
          src={logoImg}
          alt="logo"
          className="`w-5` h-`5`"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <MyLink href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.label}
              </MyLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;