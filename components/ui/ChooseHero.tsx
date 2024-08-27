import React from "react";

interface PropChose {
  text: string;
  link?: string;
}

const ChooseHero = ({ text, link = "#" }: PropChose) => {
  return (
    <>
      <a href={link}>
        <div className="bg-white text-nowrap py-2 px-4 rounded-full">{text}</div>
      </a>
    </>
  );
};

export default ChooseHero;
