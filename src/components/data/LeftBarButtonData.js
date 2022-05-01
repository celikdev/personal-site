import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { RiUser6Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

export const LeftBarButtonData = [
  {
    name: "Home",
    to: "home",
    icon: <HiHome size={24} />,
  },
  {
    name: "About",
    to: "about",
    icon: <RiUser6Fill size={24} />,
  },
  {
    name: "Services",
    to: "services",
    icon: <MdWork size={24} />,
  },
  {
    name: "Experience",
    to: "experience",
    icon: <FaGraduationCap size={24} />,
  },
  {
    name: "Works",
    to: "works",
    icon: <IoLayers size={24} />,
  },
  {
    name: "Contact",
    to: "contact",
    icon: <SiGooglemessages size={24} />,
  },
];
