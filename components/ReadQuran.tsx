import React from "react";
import MainSurah from "./AllSurah";

function ReadQuran() {
  return (
    <main className="sm:px-20 py-20 px-5" id="read_surah">
      <h1 className="text-[#2fa2ae] font-bold text-3xl sm:mb-16 mb-11  scroll-m-[150px]" id="all_surah">
        Baca Al-Quran
      </h1>
      <MainSurah />
    </main>
  );
}

export default ReadQuran;
