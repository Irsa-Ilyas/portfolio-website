import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
            MY Skills
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10  md:space-y-0 space-y-6 -mt-[5rem]">
            <div className="p-4 w-[100%] md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  HTML
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[100%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white text-right mt-2">100%</p>
              </div>
            </div>
            <div className="w-[100%] p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  CSS
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[95%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white text-right mt-2">95%</p>
              </div>
            </div>
            <div className="w-[100%] p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className=" text-white text-lg title-font font-medium mb-2">
                  JavaScript/TypeScript
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[90%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white text-right mt-2">90%</p>
              </div>
            </div>
            <div className="w-[100%] p-4 md:w-1/3 flex ">
              <div className=" mt-5 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold " />
              </div>
              <div className="flex-grow pl-6 ">
                <h2 className=" mt-5 text-white text-lg title-font font-medium mb-2">
                  BootStrap
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[90%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white text-right mt-2">90%</p>
              </div>
            </div>
            <div className="w-[100%] p-4 md:w-1/3 flex">
              <div className="mt-5 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="mt-5 text-white text-lg title-font font-medium mb-2">
                  Tailwind CSS
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[82%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white  text-right mt-2">82%</p>
              </div>
            </div>
            <div className="w-[100%] p-4 md:w-1/3 flex">
              <div className="mt-5 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <FaCheckSquare className="text-xl font-bold" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="mt-5 text-white text-lg title-font font-medium mb-2">
                  Next.JS
                </h2>
                <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                  <div className="absolute h-1 w-[75%] bg-[#ffc104] rounded-xl"></div>
                </div>
                <p className="font-bold text-white text-right mt-2">75%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
