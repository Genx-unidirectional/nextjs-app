"use client";
import cn from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const linkArr = [
    {
      name: "Checkout",
      url: "/routeseg/checkout",
    },
    {
      name: "Account",
      url: "/routeseg/account",
    },
    {
      name: "Cart",
      url: "/routeseg/cart",
    },
  ];

  return (
    <div className="bg-pink-500 h-screen w-full grid grid-cols-12">
      <div className="col-span-3 bg-slate-700 flex flex-col justify-center items-center">
        {linkArr.map((link) => {
          return (
            <Link
              href={link.url}
              className={cn("text-white font-bold text-2xl", {
                "text-white": link.url === pathName,
              })}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
export default layout;
