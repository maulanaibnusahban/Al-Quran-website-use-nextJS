"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { NAV_SIDEBAR } from "@/constants";
import Button from "./ui/Button";
import SidebarNav from "./SidebarNav";

function Navbar() {
  // const [menuOpen, setmenuOpen] = useState(false);

  // const handleNav = () => {
  //   setmenuOpen(!menuOpen);
  // };

  const [menuOpen, setmenuOpen] = useState(false);

  const handleNav = () => {
    setmenuOpen(!menuOpen);
  };

  // Menggunakan useEffect untuk mengontrol scroll halaman
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Mengunci scroll
    } else {
      document.body.style.overflow = "auto"; // Mengembalikan scroll
    }

    // Membersihkan efek ketika komponen di-unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="bg-[#353a40] h-14 max-w-8xl fixed flex justify-between w-full items-center pr-4 md:px-8 z-50 shadow-zinc-800 shadow-md">
      <h2 className="text-[#e9ebe8] flex font-bold text-xl bg-[#353a40 w-60 items-center pl-4">Al-Quran Digital ✨</h2>
      <div className="hidden md:flex text-[#e9ebe8] font-medium">
        <ul className="gap-10 flex">
          <Link href="/">
            <li className="hover:text-[#2ba4ac] hover:border-b-2 border-[#2ba4ac] transition-all">Beranda</li>
          </Link>
          <Link href="/#about_quran">
            <li className="hover:text-[#2ba4ac] hover:border-b-2 border-[#2ba4ac] transition-all">Tentang Al-Quran</li>
          </Link>
          <Link href="/#read_surah">
            <li className="hover:text-[#2ba4ac] hover:border-b-2 border-[#2ba4ac] transition-all">Baca Al-Quran</li>
          </Link>
          <Link href="/kontak">
            <li className="hover:text-[#2ba4ac] hover:border-b-2 border-[#2ba4ac] transition-all">Kontak</li>
          </Link>
        </ul>
      </div>
      {menuOpen ? (
        <IoClose onClick={handleNav} className="md:hidden h-7 w-7 fill-white" />
      ) : (
        <SlMenu onClick={handleNav} className="md:hidden h-7 w-7 fill-white" />
      )}
      <div
        className={`fixed top-0 left-0 w-[65%] h-full bg-[#353a40] px-2 -z-40 shadow-custom transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarNav />
      </div>
    </nav>
  );
}
export default Navbar;
