export default function Loading() {
  return (
    <div className="relative flex-1 min-w-[330px] p-1 max-w-[652px] mx-3 md:ml-7 lg:ml-[194px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="mt-1 mb-5 w-1/2 bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse rounded-full h-[1rem]" />
        <div className="my-5 flex flex-col gap-8">
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
          <ResultProp />
        </div>
      </div>
    </div>
  );
}

function ResultProp() {
  return (
    <div className="flex flex-col gap-1">
      <div className="block w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1.5rem] rounded-full" />
      <div className="block w-1/2 bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1rem] rounded-full" />
      <div className="flex flex-col gap-[2px]">
        <div className="block w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1rem] rounded-full" />
        <div className="block w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1rem] rounded-full" />
      </div>
    </div>
  );
}
