import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";

export default function HomeHeader() {
  return (
    <header className="min-w-[380px] flex justify-end p-[6px]">
      <div className="h-12 flex justify-end items-center space-x-4 px-3 ">
        <Link className="link" target="_blank" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="link" target="_blank" href="https://images.google.com">
          Images
        </Link>
        <CgMenuGridO className="text-4xl rounded-full bg-transparent hover:bg-gray-900/10 p-[6px]" />
        <button className="bg-[#1a73e8] hover:bg-[#1b66c9] hover:shadow-[0_01px_3px_1px_rgba(66,64,67,0.15)] px-6 py-2 rounded-md whitespace-nowrap text-white">
          Sign in
        </button>
      </div>
    </header>
  );
}
