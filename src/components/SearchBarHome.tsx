"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export function SearchBarHome() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col w-full p-5 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full p-1 max-h-40 max-w-xl rounded-full border hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,.28)]"
      >
        <AiOutlineSearch className="m-2 text-[1.25rem] text-gray-500/70" />
        <input type="text" className="flex-1 outline-none" />
        <button>
          <BsFillMicFill className="m-2 text-[1.25rem]" />
        </button>
        <button>
          <AiOutlineCamera className="m-2 text-[1.25rem]" />
        </button>
      </form>
      <div className="pt-5  flex justify-center">
        <button className="btn">Google Search</button>
        <button className="btn">I&apos;m Feeling Lucky</button>
      </div>
    </div>
  );
}
