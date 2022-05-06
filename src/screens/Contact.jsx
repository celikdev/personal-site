import React from "react";
import { Container } from "../components/main";

const Contact = () => {
  return (
    <Container className="h-full gap-32" id="contact">
      <h1 className="font-extrabold text-3xl mx-36">Contact</h1>
      <div className="w-full flex flex-col gap-16 h-full items-center">
        <div className="flex flex-col items-center gap-4 bg-gray-100 px-24 py-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl text-center">
            For Everything You're Wondering About
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">
              <input
                type="text"
                placeholder="Name"
                className="px-2 shadow-md text-sm font-semibold py-2 rounded-lg outline-none border-2 border-transparent transition-colors duration-300 hover:border-background focus:border-background"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-2 shadow-md text-sm font-semibold py-2 rounded-lg outline-none border-2 border-transparent transition-colors duration-300 hover:border-background focus:border-background"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="px-2 shadow-md text-sm font-semibold py-2 rounded-lg outline-none border-2 border-transparent transition-colors duration-300 hover:border-background focus:border-background"
            />
            <textarea
              type="text"
              placeholder="Message"
              className="px-2 shadow-md text-sm font-semibold py-2 rounded-lg outline-none border-2 border-transparent transition-colors duration-300 hover:border-background focus:border-background"
            />
          </div>
          <button className="bg-background px-10 py-2 rounded-lg font-semibold text-sm transition hover:scale-110">
            Send Message
          </button>
        </div>
        <h1 className="font-semibold text-sm text-gray-500">
          Don't like forms? Send me an{" "}
          <a href="hakan@celik.dev" className="text-black">
            email
          </a>
          . 👋
        </h1>
      </div>
    </Container>
  );
};

export default Contact;
