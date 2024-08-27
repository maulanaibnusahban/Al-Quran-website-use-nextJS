import HeaderSurah from "@/components/HeaderSurah";
import MainSurah from "@/components/MainSurah";
import { DataMainSurah } from "@/data/intervaces";
import Link from "next/link";

async function PageSurah({ params }: any) {
  const { detailsurah: surahId } = params;
  // const router = useRouter();
  // const pathname = usePathname();

  // function handleClick() {
  //   router.push(`${pathname}/#header`);
  // }

  // const pathname = usePathname();
  // const surahId = pathname.split("/")[2];

  const api = process.env.API_QURAN;

  const response = await fetch(api + surahId);
  const fullData = await response.json();
  const identitas = fullData.data;
  const fullAyat = identitas.ayat;

  return (
    <>
      <div className="h-14" />
      <main className="sm:py-7 sm:px-20 text-white gap-2 flex flex-col py-6 px-1">
        <HeaderSurah
          nama={identitas.nama}
          nomor={identitas.nomor}
          namaLatin={identitas.namaLatin}
          jumlahAyat={identitas.jumlahAyat}
          tempatTurun={identitas.tempatTurun}
          arti={identitas.arti}
          deskripsi={identitas.deskripsi}
          audio={identitas.audioFull["05"]}
        />
        <main className="bg-[#272f32] w-full  rounded-lg py-9 sm:px-12 px-6">
          {fullAyat.map((data: DataMainSurah) => (
            <MainSurah
              key={data.nomorAyat}
              nomorAyat={data.nomorAyat}
              teksArab={data.teksArab}
              teksIndonesia={data.teksIndonesia}
              audio={data.audio["05"]}
            />
          ))}
          <div className="w-full flex justify-center gap-3">
            <Link href={"/"}>
              <button className="px-6 py-2 rounded-sm bg-[#2aa5ac]" type="button">
                Halaman Utama
              </button>
            </Link>
            <Link href={`/surah/${surahId}/#header`}>
              <button className="px-6 py-2 rounded-sm bg-[#2aa5ac]" type="button">
                Kembali Ke Atas
              </button>
            </Link>
          </div>
        </main>
      </main>
    </>
  );
}

export default PageSurah;
