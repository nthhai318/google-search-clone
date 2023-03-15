export default function Loading() {
  return (
    <div className="flex-1 relative min-w-[330px] p-1 mx-3 md:ml-7 lg:ml-[194px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="mt-1 mb-5 w-1/4 min-w-[200px] bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse rounded-full h-[1rem]" />
        <div className="my-5 flex flex-wrap gap-5 h-full overflow-hidden">
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
    <div className="h-[228px] w-[300px] overflow-hidden flex flex-col gap-1">
      <div className="h-[180px] w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse rounded-lg" />

      <div className="relative group w-full h-[50px]] flex flex-col gap-1">
        <div className="block w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1rem] rounded-md" />
        <div className="block w-full bg-gradient-to-r from-slate-300 to-slate-200 animate-pulse h-[1rem] rounded-md" />
      </div>
    </div>
  );
}
