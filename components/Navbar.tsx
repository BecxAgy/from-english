import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo: sempre visível */}
      <Image src="/assets/logo.svg" alt="logo" width={110} height={110} />

      {/* Links e botão: visíveis apenas em telas grandes */}
      <div className="hidden md:flex gap-6">
        <Link className="hover:text-blue-light" href="#about-us">
          Sobre nós
        </Link>
        <Link className="hover:text-blue-light" href="#metodology">
          Metodologia
        </Link>
        <Link className="hover:text-blue-light" href="#plans">
          Planos
        </Link>
        <Link className="hover:text-blue-light" href="#testemonials">
          Testemunhas
        </Link>
        <Link className="hover:text-blue-light" href="#faq">
          FAQ
        </Link>
      </div>

      <div className="hidden md:block">
        <Button className="bg-blue-light rounded-2xl">Começar</Button>
      </div>

      {/* Mobile Nav: visível apenas em telas pequenas */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
