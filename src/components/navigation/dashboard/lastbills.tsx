import { fetchLastBills } from "@/lib/utils";
async function LastBills() {
  const lastBills = await fetchLastBills();
  return (
    <div className="w-full bg-white gap-1 justify-evenly flex rounded-lg p-2  h-full">
      {lastBills.map((bill) => {
        return (
          <div
            key={`${bill}sldkfnsdfoeoejejjofjeofjejfof`}
            className="w-[150px] rounded-lg h-[150px] bg-orange-300 text-orange-900 font-bold text-3xl flex justify-center items-center"
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            })
              .format(bill)
              .slice(0, 6)}
          </div>
        );
      })}
    </div>
  );
}
export default LastBills;
