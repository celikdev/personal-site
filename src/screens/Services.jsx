import React from "react";
import Link from "react-scroll/modules/components/Link";
import { Container } from "../components/main";

const Services = () => {
  return (
    <Container className="h-4/6" id="services">
      <div className="w-4/5 flex flex-col gap-16 h-2/3">
        <h1 className="font-extrabold text-3xl mx-36">Services</h1>
        <div className="w-full mx-36 flex flex-col gap-8 items-center">
          <div className="w-full flex gap-16">
            <div className="w-3/4 bg-purple-400 h-64 rounded-xl filter drop-shadow-lg transition hover:-translate-y-3 duration-300 flex items-center justify-center font-bold text-xl">
              Service 1
            </div>
            <div className="w-3/4 bg-green-400 h-64 rounded-xl filter drop-shadow-lg transition hover:-translate-y-3 duration-300 flex items-center justify-center font-bold text-xl">
              Service 2
            </div>
            <div className="w-3/4 bg-blue-400 h-64 rounded-xl filter drop-shadow-lg transition hover:-translate-y-3 duration-300 flex items-center justify-center font-bold text-xl">
              Service 3
            </div>
          </div>
          <h1 className="font-semibold">
            Looking for a custom job?{" "}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-orange-400"
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Services;
