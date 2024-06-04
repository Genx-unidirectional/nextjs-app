"use client";

import { useRouter } from "next/navigation";
import React, { type ElementRef, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const refContainer = useRef<ElementRef<"dialog">>(null);
  const dismiss = () => {
    router.back();
  };
  useEffect(() => {
    if (!refContainer.current?.open) {
      refContainer.current?.showModal();
    }
  });
  return createPortal(
    <div>
      <dialog
        ref={refContainer}
        onClose={dismiss}
        className="w-[400px] h-[400px] rounded-lg bg-white text-black font-bold text-5xl flex justify-center items-center"
      >
        {children}
        <button onClick={dismiss} className="absolute top-0 right-0">
          X
        </button>
      </dialog>
    </div>,
    document.getElementById("root-div")!
  );
}
export default Modal;
