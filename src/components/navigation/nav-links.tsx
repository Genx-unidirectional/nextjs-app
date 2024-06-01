"use client";
import { navConfig } from "@/config/navigate";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavLinks() {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-start my-2 p-4 w-full">
      <div
        className="p-2 flex  flex-col items-start  border-b border-black gap-2 
      "
      >
        <h3 className="font-medium text-xl text-black">
          This is link based routing
        </h3>
        <div className="flex flex-col gap-1">
          {navConfig.map((link) => {
            return (
              <Link
                className="bg-orange-800 text-white font-bold text-lg rounded-lg p-1"
                href={link.url}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className="p-2 flex  flex-col items-start  border-b border-black gap-2 
      "
      >
        <h3 className="font-medium text-xl text-black">
          This is useRouter based routing
        </h3>
        {navConfig.map((link) => {
          return (
            <button
              className="bg-orange-800 text-white font-bold text-lg rounded-lg p-1"
              onClick={() => router.push(link.url)}
            >
              {link.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default NavLinks;
