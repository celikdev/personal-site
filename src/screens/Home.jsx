import React, { useState } from "react";
import MyImage from "../assets/Kucuk.jpg";
import Typed from "react-typed";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Link } from "react-scroll";
import BackgroundParticles from "../components/Home/BackgroundParticles";

const Home = () => {
  const [cX, setCx] = useState(0);
  const [cY, setCy] = useState(0);

  return (
    <div
      onMouseMove={(e) => {
        setCx(e.clientX);
        setCy(e.clientY);
      }}
      id="home"
      className="bg-background w-full h-full flex flex-col items-center justify-between text-text"
    >
      <div />
      <BackgroundParticles cX={cX} cY={cY} />
      <div className="w-2/5 h-96 gap-6 rounded-lg flex flex-col items-center py-12">
        <img
          src={MyImage}
          alt="myImage"
          className="rounded-full bg-yellow-500 w-32 h-32 object-cover transition hover:scale-110 outline-4 outline-black outline outline-offset-4"
        />
        <div className="w-full flex flex-col items-center gap-2">
          <h1 className="font-bold text-xl">Hakan Çelik</h1>
          <Typed
            className="font-semibold"
            strings={[
              "I'm a Front-end Developer",
              "I'm a electronics technician",
              "I'm a basketball player",
              "I'm a student",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/celikdev"
            >
              <FaInstagram
                size={28}
                className="transition hover:scale-125 duration-200 hover:text-texthover"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/celikdev0"
            >
              <FaTwitter
                size={28}
                className="transition hover:scale-125 duration-200 hover:text-texthover"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/celikdev"
            >
              <FaGithub
                size={28}
                className="transition hover:scale-125 duration-200 hover:text-texthover"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:hakan@randevum.tech"
            >
              <GoMail
                size={28}
                className="transition hover:scale-125 duration-200 hover:text-texthover"
              />
            </a>
          </div>
        </div>
      </div>
      <Link
        smooth
        to="about"
        className="mb-10 font-semibold text-sm text-text cursor-pointer"
      >
        Scroll Down
      </Link>
    </div>
  );
};

export default Home;
