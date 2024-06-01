async function SkeletonLatestTransact() {
  return (
    <div className="w-full overflow-hidden overflow-y-scroll gap-2 flex flex-col p-4 rounded-lg bg-orange-500 h-full">
      {"abcsef".split("").map((transact) => {
        return (
          <div
            key={`${transact}sdfosdfodfijspsp`}
            className="rounded-lg  p-3 w-1/2
             mx-auto flex items-center bg-white  gap-2 justify-between h-[150px]"
          >
            <div className="flex gap-10 items-center">
              <div className="w-[80px] h-[80px] rounded-full border-white bg-orange-300 animate-pulse border-2"></div>
              <div>
                <p className="font-bold bg-slate-400 animate-pulse text-2xl w-[100px] rounded-lg h-4"></p>
                <p className="bg-slate-400  animate-pulse w-[70px] mt-1 rounded-lg h-4"></p>
              </div>
            </div>
            <div>
              <div className="p-1 bg-slate-400 rounded-lg animate-pulse w-36 h-4 text-white font-medium flex justify-center items-center"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SkeletonLatestTransact;
