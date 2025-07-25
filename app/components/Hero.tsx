import React from "react";
import { roboto, robotoItalic } from "../layout";

const Hero = () => {
  let tilt = "design".split("");

  return (
    <div className="w-full h-[calc(100vh-130px)] flex flex-col gap-5 text-black text-8xl leading-16 pl-34 py-16 tracking-tight">
      <div>
        <h1>We are a digital</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-36 h-24 rounded-full overflow-hidden">
          <video src="/herovideo.mp4" muted autoPlay loop></video>
        </div>
        <div className="flex items-center gap-6">
          <div className={`${roboto.className} flex gap-1 font-thin `}>
            {tilt.map((t, i) => (
              <p key={i} className="italic scale-x-[115%]">
                {t}
              </p>
            ))}
          </div>
          and
        </div>
      </div>
      <div>motion agency</div>
    </div>
  );
};

export default Hero;
