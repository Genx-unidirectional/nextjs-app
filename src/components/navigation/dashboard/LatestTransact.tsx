import { fetchLastTransaction } from "@/lib/utils";
async function LatestTransact() {
  const lastTransact = await fetchLastTransaction();
  return (
    <div className="w-full overflow-hidden overflow-y-scroll gap-2 flex flex-col p-4 rounded-lg bg-orange-500 h-full">
      {lastTransact.map((transact) => {
        return (
          <div
            key={`${transact}sdfosdfodfijspsp`}
            className="rounded-lg p-3 w-1/2
             mx-auto flex items-center bg-white  gap-2 justify-between h-[150px]"
          >
            <div className="flex items-center gap-10">
              <div
                className="w-[80px] h-[80px] rounded-full border-white border-2"
                style={{ backgroundColor: transact.color }}
              ></div>
              <div className="flex flex-col items-start">
                <p className="font-bold text-black text-2xl">{transact.name}</p>
                <p className="text-slate-700">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transact.invoice)}
                </p>
              </div>
            </div>
            <div>
              {transact.paid ? (
                <div className="rounded-xl p-1 w-36 bg-green-500 text-white font-medium flex justify-center items-center">
                  paid
                </div>
              ) : (
                <div className="rounded-xl p-1 w-36 bg-red-500 text-white font-medium flex justify-center items-center">
                  pending
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default LatestTransact;
