import SearchHeader from "@/components/SearchHeader";
import { useSearchParams } from "next/navigation";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
