"use client";
import React, { useState } from "react";
import { SvgHeader, SvgSearch } from "./ui/svg-asset";
import ChooseHero from "./ui/ChooseHero";
import { useRouter } from "next/navigation";

function Hero() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSearchClick = () => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (lowerCaseValue) {
      setValue(lowerCaseValue);
      router.push(`/#${lowerCaseValue}`);
    }
  };

  return (
    <>
      <div className="h-14" />
      <main className="flex flex-col bg-bg-hero h-[450px] bg-cover bg-center bg-blend-screen items-center justify-center">
        <SvgHeader index="fill-white h-[170px]" />
        <div className="flex pt-16">
          <input
            type="search"
            onChange={handleInputChange}
            placeholder="Apa Yang Ingin Anda Baca .?"
            className="sm:w-[400px] w-[320px] h-[45px] rounded-bl-full rounded-tl-full px-4 text-sm outline-none"
          />
          <div
            onClick={handleSearchClick}
            className="svg_search flex items-center relative bg-[#2ba4ac] h-[45px] w-12 rounded-br-full rounded-tr-full mb-9"
          >
            <SvgSearch index={"absolute left-[10px] h-[20px] w-[20px] fill-white"} />
          </div>
        </div>
        <div className="flex text-xs flex-wrap gap-4 justify-center sm:justify-between w-[300px] sm:w-[570px] overflow-hidden">
          <ChooseHero text={"Lihat semua surah"} link={"#all_surah"} />
          <ChooseHero text={"Tentang Al Quran"} link={"#about_quran"} />
          <ChooseHero text={"Baca Al Quran"} link={"#read_surah"} />
          <ChooseHero text={"Surah Yasin"} link={"#yasin"} />
        </div>
      </main>
    </>
  );
}

export default Hero;
