import Image from "next/image";
import React from "react";

function Kontak() {
  return (
    <main className="pt-28 pb-14 px-32 flex justify-center items-center text-white h-screen">
      <p className="text-lg underline cursor-default text-nowrap">Coming Soon 🙏</p>

      {/* <div className="bg-[#353a40] w-full flex h-full rounded-lg p-10">
        <div className="flex flex-col w-[40%] items-center pt-20 px-5 relative">
          <h1 className="text-[34px] text-[#2aa5ac] font-bold">Hubungi Kami ☎️</h1>
          <p className="text-center mt-6">Berikan feedback kepada kami mengenai website ini.</p>
          <Image src="/human-telephone.png" className="absolute bottom-0 scale-x-[-1] right-0" alt="gambar telephone" width={200} height={200} />
        </div>
        <div className="flex flex-col h-full w-[60%] border-l-4 border-white pl-14 gap-4">
          <div className="nama flex flex-col w-[90%] text-black gap-2">
            <label htmlFor="nama" className="text-white">
              Nama Anda :
            </label>
            <input type="text" className="h-11 outline-none rounded-sm px-3" placeholder="Nama Anda ..." name="nama" id="nama" />
          </div>
          <div className="email flex flex-col w-[90%] text-black gap-2">
            <label htmlFor="email" className="text-white">
              Email :
            </label>
            <input type="text" className="h-11 outline-none rounded-sm px-3" placeholder="Email Anda ..." name="email" id="email" />
          </div>
          <div className="pesan flex flex-col w-[90%] text-black gap-2">
            <label htmlFor="pesan" className="text-white">
              Pesan :
            </label>
            <textarea name="pesan" placeholder="Pesan anda ..." className="h-[195px] outline-none rounded-sm p-3 resize-none" />
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default Kontak;
