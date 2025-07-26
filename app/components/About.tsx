import React from "react";
import { matter400, matter500 } from "../layout";

const About = () => {
  return (
    <div className={`${matter400.className} w-full min-h-screen flex items-center gap- text-black px-40 pt-20`}>
      <div className="w-1/2">
        <video className="w-[90%]" src="/about.mp4" muted autoPlay loop></video>
      </div>
      <div className="w-1/2 flex flex-col items-start gap-12">
        <div className="text-[28px] leading-7.5 tracking-">
          <p>
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
        </div>

        <button className="w-96 h-44  border border-black rounded-full text-[28px]"><p>What we do</p></button>
      </div>
    </div>
  );
};

export default About;
