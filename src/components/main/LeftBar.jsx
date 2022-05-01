import React from "react";
import { LeftBarButtonData } from "../data/LeftBarButtonData";

import { Link } from "react-scroll";

const LeftBar = ({ pageName }) => {
  return (
    <div className="w-[18%] h-full fixed top-0 left-0 bg-background filter drop-shadow-2xl flex flex-col items-center justify-between py-10">
      <h1 className="text-3xl font-extrabold text-text">Hakan</h1>
      <div className="flex flex-col gap-3 mb-40">
        {LeftBarButtonData.map((buton) => (
          <Link
            to={buton.to}
            smooth={true}
            duration={500}
            className={`font-bold cursor-pointer flex items-center gap-4 transition-colors duration-200 text-text hover:text-texthover ${
              pageName === buton.name ? "text-texthover" : ""
            }`}
          >
            {buton.icon}
            <h1>{buton.name}</h1>
          </Link>
        ))}
      </div>
      <div>
        <h1 className="font-semibold opacity-50 text-text">
          Hakan Celik || 2022
        </h1>
      </div>
    </div>
  );
};

export default LeftBar;
