import React from "react";

function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {children}
      {modal}
      <div id="root-div"></div>
    </div>
  );
}
export default layout;
