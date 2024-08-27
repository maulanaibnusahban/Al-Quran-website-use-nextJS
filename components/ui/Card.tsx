"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CardProps } from "@/data/intervaces";

function Card({ nomor, nama, namaLatin, arti, jumlahAyat, idSurah }: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/surah/${idSurah}`);
  };

  return (
    <div
      className="flex calc card rounded-[2px] overflow-hidden cursor-pointer h-[75px] transition-all duration-200 border border-solid border-[#343a40] hover:bg-[#092b2d] bg-[#202125]"
      id={`${namaLatin.toLowerCase()}`}
      onClick={handleClick}
    >
      <div className="w-[23%] flex justify-center items-center">
        <div className="flex bg-[#363f44] number-box h-[43px] w-[43px] justify-center items-center rotate-45 rounded-sm">
          <span className="text-white -rotate-45 nomor">{nomor}</span>
        </div>
      </div>
      <div className="w-[52%] pl-[6px] flex items-center">
        <div>
          <h2 className="text-white">{namaLatin}</h2>
          <p className="text-[13px] arti text-[#6e7477]">{arti}</p>
        </div>
      </div>
      <div className="w-[25%] flex justify-center items-center">
        <div className="flex flex-col w-full items-end pr-4">
          <p className="text-xl text-white">{nama}</p>
          <p className="text-[13px] arti text-[#6e7477]">{jumlahAyat} Ayat</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
