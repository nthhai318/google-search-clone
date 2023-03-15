import { SearchDataImage } from "@/app/search/image/page";
import Link from "next/link";
import Image from "next/image";
import Parser from "html-react-parser";

export default function ImageSearchResult({
  results,
}: {
  results: SearchDataImage;
}) {
  const currentPage =
    Math.floor(results.queries.request[0].startIndex / 10) + 1;
  return (
    <div className="min-w-[330px] p-1 mx-3 md:ml-7 lg:ml-[194px]">
      <div>
        <p className="italic mb-5">
          {currentPage !== 1 ? `Page ${currentPage} of a` : `A`}
          bout {results.searchInformation.formattedTotalResults} results in{" "}
          {results.searchInformation.formattedSearchTime} seconds
        </p>
      </div>
      <div className="my-5 flex flex-wrap gap-5">
        {results.items.map((result) => (
          <div
            key={result.link}
            className="max-h-[228px] w-fit max-w-[300px] overflow-hidden"
          >
            <Link href={result.link}>
              <div className="h-[180px] w-fit flex items-center justify-center">
                <Image
                  src={result.link}
                  height={result.image.height}
                  width={result.image.width}
                  alt={result.snippet}
                  className="max-h-[180px] w-auto rounded-md"
                />
              </div>
            </Link>
            <div className="relative group w-full h-[48px] overflow-hidden">
              <div className="absolute inset-0">
                <p className="italic group-hover:underline">
                  {result.displayLink}
                </p>
                <p className="group-hover:underline">{result.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
