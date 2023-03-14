"use client";

import Link from "next/link";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOpts";

export default function SearchHeader() {
  return (
    <header className="flex flex-col border-b-2">
      <div className="flex items-center justify-between pt-5">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image
              alt="google-logo"
              width={92}
              height={30}
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              className="mx-7 my-1"
            ></Image>
          </Link>
          <SearchBar />
        </div>
        <div className="h-12 flex justify-end items-center space-x-4 px-3 ">
          <Link className="link" target="_blank" href="https://mail.google.com">
            Gmail
          </Link>
          <Link
            className="link"
            target="_blank"
            href="https://images.google.com"
          >
            Images
          </Link>
          <CgMenuGridO className="text-4xl rounded-full bg-transparent hover:bg-gray-900/10 p-[6px]" />
          <button className="bg-[#1a73e8] hover:bg-[#1b66c9] hover:shadow-[0_01px_3px_1px_rgba(66,64,67,0.15)] px-6 py-2 rounded-md whitespace-nowrap text-white">
            Sign in
          </button>
        </div>
      </div>
      <SearchOptions />
    </header>
  );
}
