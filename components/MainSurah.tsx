import { DataMainSurah } from "@/data/intervaces";
import React from "react";

function MainSurah({ nomorAyat, teksArab, teksIndonesia, audio }: DataMainSurah) {
  return (
    <div className="mb-10 scroll-m-[150px]" id={`${nomorAyat}`}>
      <p>{nomorAyat}</p>
      <div className="pb-8 pt-7  w-full flex justify-end">
        <p className="max-w-[70%] w-full text-end text-2xl leading-[2.2] tracking-wider">{teksArab}</p>
      </div>
      <p>Terjemah :</p>
      <p className="max-w-[75%] pt-4">{teksIndonesia}</p>
      <audio controls loop className="my-5">
        <source src={audio} />
      </audio>
      <div className="h-[1.3px] bg-white  rounded-sm" />
    </div>
  );
}

export default MainSurah;
