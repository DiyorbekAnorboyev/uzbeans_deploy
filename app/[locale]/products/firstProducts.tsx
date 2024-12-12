import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logoWhite.png';
import { FaGlobe, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia'


const FirstProductPage = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-16 flex flex-col min-h-screen justify-between products_bg">
      {/* Logo Section */}
      <div className="w-full flex items-center justify-center">
        <Image className="h-16 sm:h-20 w-auto" src={logo} alt="logo" />
      </div>

      {/* Title */}
      <div className="text-4xl sm:text-6xl text-center w-full font-bold">
        CATALOGUE OF OUR PRODUCTS
      </div>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 px-4 sm:px-10">
        <div className="flex gap-2 items-center text-lg sm:text-2xl">
          <FaPhone /> <LiaTelegramPlane /> +998(95)-089-99-44
        </div>
        <div className="flex gap-2 items-center text-lg sm:text-2xl">
          <FaInstagram /> uzbeans
        </div>
        <div className="flex gap-2 items-center text-lg sm:text-2xl">
          <FaGlobe /> www.uzbeans.com
        </div>
      </div>
    </div>
  );
};

export default FirstProductPage;
