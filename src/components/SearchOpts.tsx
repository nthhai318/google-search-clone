import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlinePicture, AiOutlineSearch } from "react-icons/ai";

export default function SearchOptions() {
  const current = usePathname().split("/")[2];
  const router = useRouter();
  const query = useSearchParams().get("query") ?? "";

  function handleSelect(select: string) {
    router.push(`/search/${select}?query=${query}`);
  }

  return (
    <div className="ml-7 lg:ml-[180px] flex gap-5 items-end mt-2">
      <button
        className={`p-2 flex gap-2 items-center border-b-2 ${
          current === "web" ? " border-blue-700" : "border-transparent"
        }`}
        onClick={() => handleSelect("web")}
      >
        <AiOutlineSearch /> All
      </button>
      <button
        className={`p-2 flex gap-2  items-center border-b-2 ${
          current === "image" ? " border-blue-700" : "border-transparent"
        }`}
        onClick={() => handleSelect("image")}
      >
        <AiOutlinePicture /> Image
      </button>
    </div>
  );
}
