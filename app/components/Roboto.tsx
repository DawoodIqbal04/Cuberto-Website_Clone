import React from "react";

const Roboto = ({ text }: { text: string }) => {
  const tilt = text.split("");
  return (
    <div className={`flex gap-1 font-thin `}>
      {tilt.map((t, i) => (
        <p key={i} className="italic scale-x-[115%]">
          {t}
        </p>
      ))}
    </div>
  );
};

export default Roboto;
