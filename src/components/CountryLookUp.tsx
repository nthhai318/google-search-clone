"use client";

import { useEffect, useState } from "react";

type Location = {
  city: string;
  continent: string;
  country: string;
  countryCode: string;
};

export default function CountryLookup() {
  const [location, setLocation] = useState<Location | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_LOOKUP_KEY}`
      );
      const data: Location = await res.json();
      setLocation(data);
    })();
  }, []);
  return (
    <>
      {location && (
        <div>
          {location.city}, {location.country}
        </div>
      )}
    </>
  );
}
