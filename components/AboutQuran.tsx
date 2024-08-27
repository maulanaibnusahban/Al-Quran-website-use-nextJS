import Link from "next/link";
import React from "react";

function AboutQuran() {
  return (
    <main className="sm:px-20 px-3 pt-16 bg-[#202125]  scroll-m-[150px]" id="about_quran">
      <div className="bg-[#203237] rounded-lg px-9 py-7">
        <h2 className="text-2xl text-[#2fa2ae] font-bold">Tentang Al-Quran ✨</h2>
        <p className="mt-6 sm:text-base text-[15px] text-white">
          Al-Qur&apos;an atau Kitab Qur&apos;an (القرآن), kitab suci utama dalam Islam, diyakini sebagai wahyu Allah kepada Nabi Muhammad melalui
          Malaikat Jibril. Terdiri dari 114 surah dan banyak ayat, diturunkan selama 22 tahun 2 bulan dan 22 hari. Dipandang sebagai mukjizat terbesar
          Muhammad, mencakup seluruh pesan suci. Penyusunan Al-Qur&apos;an dilakukan oleh sahabat Nabi setelah wafatnya Muhammad. Kitab ini mengandung
          petunjuk, kisah bersejarah, dan nilai moral. Digunakan bersama hadis untuk hukum Syari&apos;ah. Dibaca dalam bahasa Arab saat Salat.
          Al-Qur&apos;an dihargai sebagai karya sastra Arab terbaik.
        </p>
        <Link href={"https://stackoverflow.com/"}>
          <button className="mt-6 sm:text-[15px] text-[12px] mb-2 px-4 py-2 bg-white rounded-md">Baca Selengkapnya</button>
        </Link>
      </div>
      <div className="w-full bg-white  h-[2px] mt-16" />
    </main>
  );
}

export default AboutQuran;
