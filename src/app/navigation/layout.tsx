import NavLinks from "@/components/navigation/nav-links";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <header className="h-[64px] bg-slate-100 flex justify-center items-center border-dashed border-b border-orange-600 w-full ">
        <h1 className="text-black font-bold text-3xl">Navigation page</h1>
      </header>

      <div className=" h-full w-full grid grid-cols-12">
        <div className="col-span-3 bg-orange-400">
          <NavLinks />
        </div>
        <div className="col-span-9 bg-orange-100">{children}</div>
      </div>
    </div>
  );
}
export default layout;
