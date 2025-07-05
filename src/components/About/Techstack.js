import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiArduino,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="tech-icons"><CgCPlusPlus /></div>
      <div className="tech-icons"><DiJavascript1 /></div>
      <div className="tech-icons"><DiReact /></div>
      <div className="tech-icons"><DiNodejs /></div>
      <div className="tech-icons"><SiNextdotjs /></div>
      <div className="tech-icons"><DiMongodb /></div>
      <div className="tech-icons"><SiFirebase /></div>
      <div className="tech-icons"><SiTailwindcss /></div>
      <div className="tech-icons"><SiBootstrap /></div>
      <div className="tech-icons"><DiGit /></div>
      <div className="tech-icons"><SiArduino /></div>
    </div>
  );
}

export default Techstack;
