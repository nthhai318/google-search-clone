"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlineCamera,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

// const randomQuoteApi = "https://zenquotes.io/api/random";

// type Quote = {
//   q: string;
//   a: string;
//   h: string;
// }[];

export function SearchBarHome() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSearchWeb(e: MouseEvent | FormEvent) {
    e.preventDefault();
    router.push(`/search/web?query=${searchInput}`);
  }

  function handleSearchImage(e: MouseEvent | FormEvent) {
    e.preventDefault();
    router.push(`/search/image?query=${searchInput}`);
  }

  async function handleFeelingCurious() {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    const word = data[0];
    router.push(`/search/web?query=${word}`);
    setLoading(false);
  }

  // async function handleFeelingDown() {
  //   setLoading(true);
  //   const res = await fetch("https://zenquotes.io/api/random");
  //   const data = await res.json();
  //   const quote = data[0];
  //   router.push(`/search/web?query=${quote}`);
  //   setLoading(false);
  // }

  return (
    <div className="flex flex-col w-full p-5 items-center justify-center">
      <div
        className={`w-full flex items-center mx-auto flex-grow min-w-[330px] p-1 max-w-2xl rounded-[20px] border hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,.28)] ${
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
      <div className="pt-5  flex flex-col xs:flex-row items-center justify-center">
        <button className="btn" onClick={handleSearchWeb}>
          Google Search
        </button>
        <button className="btn" onClick={handleFeelingCurious}>
          {loading ? <div className="lds-ring"></div> : "I'm Feeling Curious"}
        </button>
      </div>
      {/* <div className="flex justify-center">
        <button className="btn" onClick={handleFeelingDown}>
          I&apos;m Feeling Down
        </button>
      </div> */}
    </div>
  );
}
