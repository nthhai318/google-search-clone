"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);

  return (
    <div className="w-full h-[50vh] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-[2rem] font-bold">Something went wrong</h1>
      <button className="link text-[1.5rem]" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
