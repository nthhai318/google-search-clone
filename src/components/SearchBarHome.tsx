"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const randomQuoteApi = "https://zenquotes.io/api/random";

type Quote = {
  q: string;
  a: string;
  h: string;
}[];

export function SearchBarHome() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSearch(e: MouseEvent | FormEvent) {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(`/search?query=${searchInput}`);
  }

  async function handleFeelingCurious() {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    const word = data[0];
    router.push(`/search?query=${word}`);
    setLoading(false);
  }

  async function handleFeelingDown() {
    router.push(`/search?inspiration=true`);
  }

  return (
    <div className="flex flex-col min-w-[350px] w-full p-5 xs:items-center">
      <form
        onSubmit={handleSearch}
        className="flex w-full p-1 max-h-40 max-w-xl rounded-full border hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,.28)]"
      >
        <AiOutlineSearch className="m-2 text-[1.25rem] text-gray-500/70" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-1 outline-none"
        />
        <button>
          <BsFillMicFill className="m-2 text-[1.25rem]" />
        </button>
        <button>
          <AiOutlineCamera className="m-2 text-[1.25rem]" />
        </button>
      </form>
      <div className="pt-5  flex flex-col xs:flex-row items-center justify-center">
        <button className="btn" onClick={handleSearch}>
          Google Search
        </button>
        <button
          disabled={loading}
          className="btn disabled:opacity-50"
          onClick={handleFeelingCurious}
        >
          {loading ? <div className="lds-ring"></div> : "I'm Feeling Curious"}
        </button>
      </div>
      <div className="flex justify-center">
        <button className="btn" onClick={handleFeelingDown}>
          I&apos;m Feeling Down
        </button>
      </div>
    </div>
  );
}
