"use client";
import React, { useState } from "react";
import { ArrowSvg, SvgBismilah, SvgSearch } from "./ui/svg-asset";
import Link from "next/link";
import { DataHeaderSurah } from "@/data/intervaces";
import { useRouter, usePathname } from "next/navigation";

function HeaderSurah({ nomor, nama, namaLatin, jumlahAyat, tempatTurun, arti, deskripsi, audio }: DataHeaderSurah) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // alert(`Input value: ${inputValue}`); // Menampilkan nilai input saat tombol ditekan
    router.push(`${pathname}/#${inputValue}`);
    setInputValue(""); // Mengosongkan input setelah tombol ditekan
  };

  return (
    <main className="bg-[#272f32] w-full h-auto rounded-lg pt-7 pb-9 sm:px-12 px-5" id="header">
      <div className="flex flex-col items-center mb-6">
        <SvgBismilah />
        <h1 className="text-[32px] mt-8">سُورَةُ {nama} </h1>
        <p className="text-center">{`${namaLatin} | ${arti} | ${tempatTurun} | ${jumlahAyat} Ayat | Nomor ${nomor}`}</p>
        <div className="w-full h-[1.4px] bg-gray-300 mt-5" />
        <p className="text-center text-sm mt-6 mb-3" dangerouslySetInnerHTML={{ __html: deskripsi }} />
        <div className="w-full h-[1.4px] bg-gray-300 mt-5" />
      </div>
      <div className="w-full h-full items-center flex justify-between flex-col-reverse sm:flex-row gap-5">
        <Link href={"/"} className="underline flex items-center gap-3">
          <ArrowSvg index={"fill-white"} />
          <p>Halaman Utama</p>
        </Link>
        <div className="flex items-center">
          <input
            type="number"
            value={inputValue} // Menggunakan inputValue untuk input field
            onChange={handleInputChange} // Memanggil fungsi handleInputChange saat mengetik
            placeholder="Nomor Ayat .."
            className="text-black sm:w-28 h-10 px-2 outline-none sm:rounded-s-sm w-full"
          />
          <button
            onClick={handleButtonClick}
            className="  bg-gray-500 h-10 button-search-ayat hover:bg-[#3f98a6] px-2 flex items-center rounded-e-sm transition-all"
          >
            <SvgSearch index="fill-white search-ayat" />
          </button>
        </div>
        <audio controls loop>
          <source src={audio} />
        </audio>
      </div>
    </main>
  );
}

export default HeaderSurah;
