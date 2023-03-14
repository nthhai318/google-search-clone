import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div>
        <p className={`${inter.className} text-[3rem]`}>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <p className="text-[3rem] text-red font-bold">Testing font</p>
      </div>
    </main>
  );
}
