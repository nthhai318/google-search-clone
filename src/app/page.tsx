import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import { SearchBarHome } from "@/components/SearchBarHome";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[100svh]">
      <HomeHeader />

      <main className="flex flex-col items-center  min-w-[380px]">
        <Image
          alt="google-logo"
          width={272}
          height={92}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="min-w-fit"
        ></Image>
        <SearchBarHome />
      </main>
      <Footer />
    </div>
  );
}
