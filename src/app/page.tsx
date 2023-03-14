import HomeHeader from "@/components/HomeHeader";
import { SearchBarHome } from "@/components/SearchBarHome";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <HomeHeader />

      <main className="flex flex-col items-center">
        <Image
          alt="google-logo"
          width={272}
          height={92}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="mt-48"
        ></Image>
        <SearchBarHome />
      </main>
    </>
  );
}
