import Link from "next/link";
import { utilityLinks, businessLinks } from "../constants/Homepage";
import Country from "./CountryLookUp";

export default function Footer() {
  return (
    <footer>
      <div>
        <Country />
      </div>
      <div>
        <div>
          <ul>
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
          <ul>
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
