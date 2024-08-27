import AboutQuran from "@/components/AboutQuran";
import Hero from "@/components/Hero";
import ReadQuran from "@/components/ReadQuran";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#202125] flex justify-center scroll-smooth">
      <div className="w-full">
        <Hero />
        <AboutQuran />
        <ReadQuran />
      </div>
    </main>
  );
}
