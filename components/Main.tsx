/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import {
    AiOutlineClose,
    AiOutlineMail,
    AiOutlineMedium,
    AiOutlineMenu,
  } from "react-icons/ai";
  import { FaGithub, FaLinkedinIn } from "react-icons/fa";
  import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center font-sans scroll-smooth" id="About">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build future
          </p>
          <h1 className="pt-2 text-gray-700 text-[40px] uppercase text-center font-extrabold">
            Hi, I'm <span className="text-[#5651e5]">Petar</span>
          </h1>
          <h1 className="text-gray-700 text-[40px] uppercase text-center font-extrabold">
            AI Software Engineer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto font-semibold text-justify">
            Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
          <div className="inline pt-40">
              <p className="pb-3 uppercase tracking-widest text-[#5651e5] font-extrabold">
                Let's Connect
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <Link href="https://www.linkedin.com/in/petar-maletin-37804225a/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://www.github.com/ppettarrm">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                </Link>
                <Link href="https://ppettarrm.github.io/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
                </Link>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
