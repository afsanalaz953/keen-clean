import React from 'react';

import instraImg from "@/assets/image/instagram.png"
import facebookImg from "@/assets/image/facebook.png"
import twiterImg from "@/assets/image/twitter.png"
import Image from "next/image";



const Footer = () => {
    const currentYear = new Date ().getFullYear();
    return (
        <div className='bg-[#244D3F] container mx-auto text-white pt-10 pb-5'>
            <div className='space-y-2'>
           <h2 className='text-4xl text-white font-bold text-center'>
            KeenKeeper
            </h2>
            <p className='text-sm text-center text-[#96aaa4]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
             <h2 className='text-center'>Social Links </h2>
            </div>
             
               <div className='flex flex-cols-3 justify-center items-center gap-2'>
                 <div> <Image src={instraImg} className="mx-auto" alt="" /></div>
                <div> <Image src={facebookImg} className="mx-auto" alt="" /></div>
                <div> <Image src={twiterImg} className="mx-auto" alt="" /></div>
               </div>
               
<div className="border-t border-gray-800 p-8 text-center mt-4 flex gap-10 justify-between">
    <div>
<p className="text-gray-400 text-sm">
            © {currentYear} KeenKeeper. All rights reserved.
          </p>
    </div>   
          <div>
            <ul className='flex gap-3 text-gray-400 justify-center'>
                <li>Privacy Policy</li>
                <li> Terms of Service  </li>
                <li>Cookies</li>
            </ul>
          </div>
        </div>



        </div>

        
        

    );
};

export default Footer;