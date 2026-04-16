"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
     const pathname = usePathname();
   
     const isActive = href === '/' 
    ? pathname === '/'  
    : pathname === href;

    return (
<Link
      href={href}
      className={`flex items-center gap-2 ${isActive ? 'btn btn-primary' : ''}`}
    >
      {children}
    </Link>
    );
};

export default MyLink;