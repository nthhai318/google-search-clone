"use client";

import { SearchData } from "@/app/search/web/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PageNo({ results }: { results: SearchData }) {
  const router = useRouter();
  const currentOpt = usePathname().split("/")[2];
  const currentPage =
    Math.floor(results.queries.request[0].startIndex / 10) + 1;

  const pagelink = (page: number) =>
    `/search/${currentOpt}?query=${
      results.queries.request[0].searchTerms
    }&start=${page * 10 - 10}`;

  let pages: number[] = [];
  let pagesMax = results.searchInformation.totalResults / 10;
  let pagelength = Math.min(
    Math.ceil(results.searchInformation.totalResults / 10),
    10
  );

  if (currentPage <= 6) {
    for (let i = 1; i <= pagelength; i++) {
      pages.push(i);
    }
  } else {
    for (
      let i = currentPage - 5;
      i <= Math.min(currentPage + 4, pagesMax);
      i++
    ) {
      pages.push(i);
    }
  }

  pages.forEach((page) => console.log());

  return (
    <div className="my-10 min-w-[330px] p-1 max-w-[652px] mx-3 md:ml-7 lg:ml-[194px] flex justify-start gap-2">
      <div className="flex flex-col w-[2ch] items-center">
        <h1>N</h1>
      </div>
      <div className="flex flex-col w-[2ch] items-center">
        <h1>T</h1>
      </div>
      {pages.map((page) => (
        <div key={page} className="flex flex-col w-[2ch] items-center">
          <h1>H</h1>
          <button
            onClick={() => {
              router.push(pagelink(page));
            }}
            className={`${
              currentPage === page ? "font-bold text-blue-900 underline" : ""
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      <div className="flex flex-col w-[2ch] items-center">
        <h1>a</h1>
      </div>
      <div className="flex flex-col w-[2ch] items-center">
        <h1>i</h1>
      </div>
    </div>
  );
}
