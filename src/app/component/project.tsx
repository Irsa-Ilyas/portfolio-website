import React from "react";
import Link from "next/link";

function Project() {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/plant1.jfif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    plant website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Nextjs Project
                  </h1>
                  <p className="leading-relaxed">
                    A plant webpage built with tailwind css and deployed on
                    Vercel
                  </p>
                  <Link
                    target="_blank"
                    href={"https://figma-nextjs-assigment.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/bookpic.avif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    BOOK WEBSITE CLONE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Made with HTML CSS AND BOOTSTRAP
                  </h1>
                  <p className="leading-relaxed">
                    BOOK Website Landing page design using HTML CSS AND
                    BOOTSTRAP
                  </p>
                  <Link
                    target="_blank"
                    href={"https://vercel.com/irsas-projects/book-website"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/cv.jfif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    CV
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    GUESS NUMBER WITH JS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">milestone cv</p>
                  <Link
                    target="_blank"
                    href={"https://vercel.com/irsas-projects/cv"}>
                    <p className="leading-relaxed text-indigo-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
