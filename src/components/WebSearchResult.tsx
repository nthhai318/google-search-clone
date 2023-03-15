import { SearchData } from "@/app/search/web/page";
import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResult({ results }: { results: SearchData }) {
  const currentPage =
    Math.floor(results.queries.request[0].startIndex / 10) + 1;
  return (
    <div className="min-w-[330px] p-1 max-w-[652px] mx-3 md:ml-7 lg:ml-[194px]">
      <div>
        <p className="italic mb-5">
          {currentPage !== 1 ? `Page ${currentPage} of a` : `A`}
          bout {results.searchInformation.formattedTotalResults} results in{" "}
          {results.searchInformation.formattedSearchTime} seconds
        </p>
      </div>
      <div className="my-5 flex flex-col gap-8">
        {results.items.map((result, idx) => (
          <div key={`${result.link} ${idx}`}>
            <Link className="group" href={result.link}>
              <p className="text-[1.5rem] text-[#1a0dab] group-hover:underline">
                {Parser(result.htmlTitle)}
              </p>
              <p className="italic">{result.link}</p>
            </Link>
            <p>{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
