// import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row ">
          <a className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3  text-white font-bold text-3xl">
              <span className=" text-[#ffc107] font-bold text-4xl">I</span>rsa
              Ilyas
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
            <Link href={"/"} className="mr-5 hover:text-white">
              <span className="text-[#ffc107] font-bold text-lg">Home</span>
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-200">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-200">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-gray-200">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
