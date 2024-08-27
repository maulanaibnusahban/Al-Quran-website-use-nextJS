import { Data } from "@/data/intervaces";
import Card from "./ui/Card";
import Link from "next/link";

async function AllSurah() {
  const apiQuran: any = process.env.API_QURAN;
  const response = await fetch(apiQuran);
  const fullData = await response.json();
  const isi = fullData.data;
  // console.log(isi);
  return (
    <div className="w-full h-50 gap-3 flex flex-wrap justify-between scroll-p-[150px]">
      {isi.map((data: any) => (
        <Card
          nama={data.nama}
          nomor={data.nomor}
          arti={data.arti}
          namaLatin={data.namaLatin}
          jumlahAyat={data.jumlahAyat}
          key={data.nomor}
          idSurah={data.nomor}
        />
      ))}
    </div>
  );
}

export default AllSurah;
