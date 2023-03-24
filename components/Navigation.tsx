/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(true);
      }else{
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{backgroundColor: "#ffffff"}}
    className={shadow ? "fixed solid w-full h-20 shadow-xl z-100 scroll-smooth" : "fixed bg-white w-full h-20 z-100 scroll-smooth"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div/>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#About">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About me
              </li>
            </Link>
            <Link href="/#Skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#Projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#Contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact me
              </li>
            </Link>
          </ul>
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : "hidden"
        }
      >
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div/>
              <div
                onClick={toggleMenu}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-semibold">Let's build future together!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-semibold">
              <Link onClick={toggleMenu} href="#About">
                <li className="py-3 text-sm">About me</li>
              </Link>
              <Link onClick={toggleMenu} href="#Skills">
                <li className="py-3 text-sm">Skills</li>
              </Link>
              <Link onClick={toggleMenu} href="#Projects">
                <li className="py-3 text-sm">Projects</li>
              </Link>
              <Link onClick={toggleMenu} href="#Contact">
                <li className="py-3 text-sm">Contact me</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="pb-3 uppercase tracking-widest text-[#5651e5] font-extrabold">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
    </div>
  );
};

export default Navigation;
