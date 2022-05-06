import React from "react";
import { Container } from "../components/main";

const Works = () => {
  const workData = [
    {
      title: "React",
      experience: "2 years",
    },
    {
      title: "React",
      experience: "2 years",
    },
    {
      title: "React",
      experience: "2 years",
    },
    {
      title: "React",
      experience: "2 years",
    },
  ];
  return (
    <Container className="h-5/6 bg-green-300" id="works">
      <div className="w-full flex flex-col gap-16 h-full">
        <h1 className="font-extrabold text-3xl mx-36">Recent Works</h1>
        <div className="h-full bg-gray-300 flex flex-col justify-center items-center">
          <h1>Grid Yapılcak</h1>
        </div>
      </div>
    </Container>
  );
};

export default Works;
