import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]    ">
      <div className="container mx-auto px-6 lg:px-8 py-28">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600">FromEnglish</h2>
            <div className="flex gap-4 mt-4">
              <Link href="#" aria-label="Instagram" className="text-blue-600">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-blue-600">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-blue-600">
                <FaFacebookF size={24} />
              </Link>
            </div>
            <button className="mt-8 px-6 py-2 bg-blue-600 text-white text-sm  rounded-full">
              Contatar
            </button>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-16 text-center md:text-left">
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Sobre Nós
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Metodologia
            </Link>

            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Planos
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Testemunhas
            </Link>

            <Link href="#" className="text-gray-700 hover:text-blue-600">
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-8 ">
        <p className="text-center text-white text-sm">
          © 2024 From English - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
