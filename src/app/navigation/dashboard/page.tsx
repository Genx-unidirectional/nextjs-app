import { Suspense } from "react";
import LastBills from "@/components/navigation/dashboard/lastbills";
import SkeletonBills from "@/components/navigation/dashboard/SkeletonBills";
import LatestTransact from "@/components/navigation/dashboard/LatestTransact";
import SkeletonLatestTransact from "@/components/navigation/dashboard/SkeletonTransact";

function page() {
  return (
    <div className="h-screen p-4 w-full gap-4 flex flex-col ">
      <div className="w-full">
        <Suspense fallback=<SkeletonBills />>
          <LastBills />
        </Suspense>
      </div>
      <div className="flex-grow w-full overflow-hidden ">
        <Suspense fallback=<SkeletonLatestTransact />>
          <LatestTransact />
        </Suspense>
      </div>
    </div>
  );
}
export default page;
