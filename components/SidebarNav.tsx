import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { NAV_SIDEBAR } from "@/constants";

function SidebarNav() {
  return (
    <main className="pt-14">
      <div className="w-full h-[1.4px] bg-gray-300 rounded-lg" />
      <div className="w-full bg-[#272f32] mt-6 text-white p-4 rounded-[4px] overflow-hidden border-b-2 border-white">
        <h2 className="text-[#3f98a6] text-lg font-bold">Al Qur&apos;an ✨</h2>
        <p className="text-[12px] mt-1">
          Al-Qur&apos;an, kitab suci dalam agama Islam, adalah wahyu Allah kepada Nabi Muhammad SAW. Dengan lebih dari 6.000 ayat, Al-Qur&apos;an
          memberikan petunjuk bagi kehidupan sehari-hari, etika, hukum, dan spiritualitas umat Muslim. Dengan keunikan bahasanya, ia mengajarkan kasih
          sayang, keadilan, dan kebijaksanaan.
        </p>
        <Button index={"text-[12px] mt-5 px-4 py-[6px] rounded-sm text-black bg-gray-100"} label={"selengkapnya"} href="/" />
      </div>
      <div className="pl-2">
        <h1 className="text-[#3f98a6] text-lg mt-7 pb-1 border-b-[1.8px]">Menu</h1>
        <div className="text-white text-sm">
          {NAV_SIDEBAR.map((navbar) => (
            <Link href={navbar.href} key={navbar.key} className="hover:text-[#2ba4ac] transition-all">
              <div className="mt-4 border-b-[1.8px] pb-2 flex gap-3">
                <p dangerouslySetInnerHTML={{ __html: navbar.svg }} />
                {navbar.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SidebarNav;
