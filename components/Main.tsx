/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div
      className="w-full h-screen text-center font-sans scroll-smooth bg-[#252525] text-white"
      id="About"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            Let's build future
          </p>
          <h1 className="pt-2 text-white text-[40px] uppercase text-center font-extrabold">
            Hi, I'm <span className="text-[#5651e5]">Petar</span>
          </h1>
          <h1 className="text-white text-[40px] uppercase text-center font-bold">
            <span className="text-[#5651e5]">JetBrains</span> Campus Ambassador
          </h1>
          <h1 className="py-4 text-white text-[1.1rem] max-w-[70%] m-auto font-semibold justify-center">
            IT Student at Faculty of Sciences, University of Novi Sad<br/>
            BarKod Hackathon Web Developer & Organizer
          </h1>
          <div className="inline pt-40">
            <p className="pb-3 uppercase tracking-widest text-[#5651e5] font-extrabold">
              Let's Connect
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <Link href="https://www.linkedin.com/in/petar-maletin-37804225a/">
                <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link href="https://www.github.com/ppettarrm">
                <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
              </Link>
              <Link href="" onClick={() => window.location.href = 'mailto:petar.maletin.1@gmail.com?subject=Petar Maletin | Contact'}>
                <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="https://ppettarrm.vercel.app/">
                <div className="rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
