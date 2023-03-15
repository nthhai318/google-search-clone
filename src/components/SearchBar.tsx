"use client";

import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineCamera,
} from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams().get("query") ?? "";
  const [searchInput, setSearchInput] = useState(query);

  function handleSearchWeb(e: MouseEvent | FormEvent) {
    e.preventDefault();
    router.push(`/search/web?query=${searchInput}`);
  }

  function handleSearchImage(e: MouseEvent | FormEvent) {
    e.preventDefault();
    router.push(`/search/image?query=${searchInput}`);
  }

  return (
    <div
      className={`flex self-stretch mx-3 flex-grow min-w-[330px] p-1 max-w-2xl rounded-[20px] border hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,.28)] ${
        searchInput ? "shadow-[0_1px_6px_rgba(32,33,36,.28)]" : ""
      }`}
    >
      <form className="flex flex-grow" onSubmit={handleSearchWeb}>
        <AiOutlineSearch className="m-2 text-[1.25rem] text-gray-500/70" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-1 w-[30px] p-1 outline-none"
        />
        {searchInput && (
          <div onClick={() => setSearchInput("")}>
            <AiOutlineClose className="m-2 text-[1.25rem]" />
          </div>
        )}
      </form>
      <button
        onClick={(e) => {
          alert(
            "What do you expect? It only exists to look like the real thing.  Please be satisfied with keyboard search... for now..."
          );
          handleSearchWeb(e);
        }}
      >
        <BsFillMicFill className="m-2 text-[1.25rem]" />
      </button>
      <button onClick={handleSearchImage}>
        <AiOutlineCamera className="m-2 text-[1.25rem]" />
      </button>
    </div>
  );
}
