import React from "react";
import { LeftBar } from "./components/main";
import { About, Contact, Experience, Home, Services, Works } from "./screens";

const App = () => {
  return (
    <div className="flex h-full">
      <LeftBar />
      <div className="w-full ml-[18%]">
        <Home />
        <About />
        <Services />
        <Experience />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default App;
