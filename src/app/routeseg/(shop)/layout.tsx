import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-600 flex flex-col ">
      <header className="w-full h-[60px] bg-white">
        This is route group header
      </header>
      <div className="flex-grow ">{children}</div>
    </div>
  );
}
export default layout;
