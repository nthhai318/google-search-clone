import PageNo from "@/components/pageNo";
import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";
import {} from "next/navigation";
import { SearchResultsImage } from "../image/page";

export type SearchData = {
  queries: {
    request: {
      startIndex: number;
      title: string;
      totalResults: number;
      searchTerms: string;
      searchType?: string;
    }[];
  };
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
    totalResults: number;
  };
  items: SearchResults | SearchResultsImage;
  error?: object;
};

export type SearchResults = {
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
}[];

const searchUrl = (query: string, startIndex: string) =>
  `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${query}&start=${startIndex}`;

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let startIndex = searchParams?.start || "1";
  if (typeof startIndex === "object") {
    startIndex = startIndex[-1];
  }

  let query = searchParams?.query ?? " ";
  if (typeof query === "object") {
    query = query.join(" ");
  }

  const res = await fetch(searchUrl(query, startIndex));
  if (!res.ok) {
    throw new Error("Cannot return search result");
  }

  const data: SearchData = await res.json();

  if (data.searchInformation.formattedTotalResults == "0") {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center text-xl gap-5">
        <p className="font-bold text-[2rem]">
          That&apos;s preposterous!! There is no such thing on the Internet
        </p>
        <p>
          We haven&apos;t had spell checking feature yet! You may want to check
          your spell again (perhaps using real{" "}
          <Link
            target="_blank"
            className="text-blue-500 font-bold"
            href="https://google.com"
          >
            Google
          </Link>
          ?)
        </p>
        <p>
          Or perhaps you may wanna try going back{" "}
          <Link href="/" className="text-blue-500 font-bold">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {data && <WebSearchResult results={data} />}
      {data && <PageNo results={data} />}
    </div>
  );
}
