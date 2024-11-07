import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 min-h-[300px] text-white">
      <div className="container mx-auto px-4 flex flex-col space-y-8 mt-6">
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-1 ml-11"> 
            <img src="/images/logo2.png" alt="Pernafort Winery Logo" className="w-[120px] h-[100px] ml-9 z-40" /> 
            <div className="text-center md:text-left">
              <h1 className="text-[16px] font-bold text-white ">Penafort Winery</h1>
              <p className="text-[12px] text-gray-400">Fine Wines & Exquisite Taste</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4 md:mb-4 mr-8">
              <a href="https://www.facebook.com" className="text-white hover:bg-[#b63234] rounded-[25px] p-2">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.twitter.com" className="hover:bg-[#b63234] text-white rounded-[25px] p-2">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.instagram.com" className="hover:bg-[#b63234] text-white rounded-[25px] p-2">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.whatsapp.com" className="hover:bg-[#b63234] text-white rounded-[25px] p-2">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Links Section with Descriptions in Grid Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-left text-[13px] mr-11">
            <div className="flex flex-col items-start space-y-0.5">
              <Link href="/about" className="hover:text-gray-400 text-white border-b-2 border-transparent hover:border-[#b63234] transition-all duration-300 ease-in-out no-underline">
                About
              </Link>
              <div className="text-xs text-[11px] space-y-2 flex flex-col">
                <Link
                  href="/about/our-story"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2  hover:text-[#b63234] transition-all duration-300 ease-in-out"
                >
                  Our story
                </Link>
                <Link
                  href="/about/mission"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Mission
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-0.5">
              <Link href="/brands" className="hover:text-gray-400 text-white border-b-2 border-transparent hover:border-[#b63234] transition-all duration-300 ease-in-out no-underline">
                Brands
              </Link>
              <div className="text-xs text-white text-[11px] flex flex-col space-y-2">
              <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Explore lorem
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Our selections
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  lorem impsum 
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  lorem ipsum dol
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <Link href="/contact" className="hover:text-gray-400 text-white border-b-2 border-transparent hover:border-[#b63234] transition-all duration-300 ease-in-out no-underline">
                Contact
              </Link>
              <div className="text-xs text-white text-[11px] flex flex-col space-y-2">
              <Link
                  href="/about/#"
                  className="no-underline text-white"
                >
                  +2349052152564
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-white"
                >
                  +2340965654745
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-0.5">
              <Link href="/faqs" className="hover:text-gray-400 text-white border-b-2 border-transparent hover:border-[#b63234] transition-all duration-300 ease-in-out no-underline">
                FAQs
              </Link>
              <div className="text-xs text-white text-[11px] flex flex-col space-y-2">
              <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Questions faqs
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  lorem ipsum dolor
                </Link> 
              </div>
            </div>
            <div className="flex flex-col items-start space-y-0.5">
              <Link href="/policies" className="hover:text-gray-400 text-white border-b-2 border-transparent hover:border-[#b63234] transition-all duration-300 ease-in-out no-underline">
                Policies
              </Link>
              <div className="text-xs text-white text-[11px] flex flex-col space-y-2">
              <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Our policies
                </Link>
                <Link
                  href="/about/#"
                  className="no-underline text-gray-200 hover:border-b hover:border-[#b63234] border-transparent border-b-2 hover:text-[#b63234]  transition-all duration-300 ease-in-out"
                >
                  Shipping Policies
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white w-full" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © 2024 Penafort Winery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
