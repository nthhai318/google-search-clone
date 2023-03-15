import SearchResult from "@/components/SearchResult";
import Link from "next/link";
import {} from "next/navigation";

export type SearchData = {
  queries: {
    request: {
      startIndex: number;
    }[];
  };
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
  };
  items: SearchResults;
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

  let query = searchParams?.query ?? "";
  if (typeof query === "object") {
    query = query.join(" ");
  }

  const res = await fetch(searchUrl(query, startIndex));
  if (!res.ok) {
    console.log(res);
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
          Maybe you wanna try going back{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{data && <SearchResult results={data} />}</div>;
}
