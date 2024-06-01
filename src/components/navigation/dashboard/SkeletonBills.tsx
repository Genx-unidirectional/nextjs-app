function SkeletonBills() {
  return (
    <div className="w-full bg-white justify-evenly flex gap-1 rounded-lg p-2  h-full">
      {"abcd".split("").map((bill) => {
        return (
          <div
            key={`${bill}sdfsodfdi`}
            className="w-[150px] animate-pulse rounded-lg h-[150px] bg-orange-300 text-orange-900 font-bold text-3xl flex justify-center items-center"
          >
            <div className="w-8 h-1 bg-orange-800 animate-pulse"></div>
          </div>
        );
      })}
    </div>
  );
}
export default SkeletonBills;
