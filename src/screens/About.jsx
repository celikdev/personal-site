import React from "react";

import MyImage from "../assets/Kucuk.jpg";
import { Container } from "../components/main/";

const About = () => {
  return (
    <Container className="h-4/6" id="about">
      <div className="w-4/5 flex flex-col gap-16 h-2/3">
        <h1 className="font-bold text-3xl mx-36">About Me</h1>
        <div className="w-full mx-36 flex gap-16 items-center">
          <img
            src={MyImage}
            alt="myImage"
            className="rounded-full bg-yellow-500 w-32 h-32 object-cover transition hover:scale-110 outline-4 outline-black outline outline-offset-4"
          />
          <h1 className="w-2/5 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            interdum nisl. Cras elementum egestas nisi, eu aliquet sapien
            commodo non. Nam sed pharetra est, eu viverra dui. Donec ut bibendum
            tellus, et aliquet turpis. Phasellus nec sapien dapibus, dictum eros
            quis, congue quam. Fusce sed iaculis libero, vitae sollicitudin diam
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default About;
