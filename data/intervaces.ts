export interface Data {
  nomor: number;
  namaLatin: string;
  nama: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: object;
}

export interface CardProps {
  nomor: number;
  nama: string;
  arti: string;
  namaLatin: string;
  jumlahAyat: number;
  idSurah: string;
}

export interface DataHeaderSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

export interface DataMainSurah {
  nomorAyat: number;
  teksArab: string;
  teksIndonesia: string;
  audio: any;
}

export interface intButton {
  index: string;
  label: string;
  href: string;
}
