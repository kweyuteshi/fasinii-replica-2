import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#459ED5] text-white z-50 relative py-6">
      <div className="flex flex-col gap-5 sm:px-16 px-6">
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-lg">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-white">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}<div className='md:max-w-[40%] w-full'>
      <p className="my-4 text-sm">For any inquiries, feel free to leave us a message below</p>
      <form class="bg-white rounded-xl w-full"><textarea name="" id="" cols="30" rows="5" placeholder="Hi There, just wanted to ..." class="text-[#003D64] w-full focus:ring-0 border-transparent outline-0 rounded-xl p-4"></textarea><button class="bg-[#459ED5] m-2 px-4 py-2 text-white rounded-xl"><p class="text-xs">Submit</p></button></form>
      </div>
        </div>
      </div>
      <div className="flex justify-between items-left mt-4 border-t border-gray-100 sm:px-16 px-6">
        <p className='text-xs'>&copy; Fasinii Rentals 2023</p>
        {/*<div><FontAwesomeIcon icon={faUser} size='2xs'/></div>*/}
        <Link href="/" className="text-gray-500 text-xs">Terms of use</Link>
      </div>
      
    </footer>
  );
};

export default Footer;
