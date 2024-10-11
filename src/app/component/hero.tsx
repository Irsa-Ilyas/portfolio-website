"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <section className="text-[#a9adb8;] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-4xl mb-4 font-medium">
              <span className="text-[#ffc107] text-4xl"> Hello, I'm</span>
              <br className="hidden lg:inline-block text-white" />
              <span className="text-white">
                <Typewriter
                  options={{
                    strings: ["Irsa Ilyas", "Web Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mb-8 leading-relaxed ">
              Welcome to my portfolio! Explore below to discover my skills,
              projects, and <br /> how I can help transform your ideas into
              reality.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-black bg-[#Fec544] border-0 py-2 px-6 focus:outline-none hover:bg-white  hover:text-[#fec544] rounded-lg text-lg">
                  Hire Me
                </button>
              </Link>
              <button className="ml-4 inline-flex text-black bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">
                Download CV
              </button>
            </div>
          </div>
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={500}
            height={500}
            src="/assets/aboutmeimage.avif"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
