import Link from "next/link";
import { utilityLinks, businessLinks } from "../constants/Homepage";
// import Country from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="text-[#70757a] bg-[#f2f2f2] relative bottom-0 w-full min-w-[380px] flex flex-col">
      {/* FAILED TO FETCH CLIENT COUNTRY OF ORIGIN DUE TO PRIVACY PROBLEMS */}

      {/* <div className="px-8 py-3 flex justify-center sm:justify-start border-b-[1px]">
        <Country />
      </div> */}
      <div className="px-8 py-3 flex flex-col items-center sm:flex-row justify-between min-w-[380px] gap-3">
        <div>
          <ul className="flex justify-center flex-wrap gap-3">
            {businessLinks.map((link) => (
              <li key={link.name}>
                <Link className="link" target="_blank" href={link.address}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex gap-3">
            {utilityLinks.map((link) => (
              <li key={link.name}>
                <Link className="link" target="_blank" href={link.address}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>Setting</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
