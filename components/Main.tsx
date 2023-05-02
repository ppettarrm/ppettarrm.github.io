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
            <span className="text-[#5651e5]">IT Student</span> at Faculty of
            Sciences
          </h1>
          <p className="py-4 text-white max-w-[70%] m-auto font-semibold text-justify">
            I am a determined IT student at the Faculty of Sciences, University
            of Novi Sad, with a strong interest in technology. My academic
            journey has equipped me with expertise in programming languages such
            as Java, Python, and C, as well as experience in database
            management, web development, network security, and Machine Learning
            (ML). My ultimate goal is to leverage my technical expertise to
            develop innovative solutions that can positively impact society. I
            am also familiar with popular ML frameworks, such as TensorFlow and
            PyTorch, and their practical applications
          </p>
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
              <Link href="">
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
