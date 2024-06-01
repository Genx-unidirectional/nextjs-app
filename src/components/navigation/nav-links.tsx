"use client";
import { navConfig } from "@/config/navigate";
import cn from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();

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
                key={`${link.url}sjjjddd`}
                className={cn(
                  "bg-orange-800 text-white font-bold text-lg rounded-lg p-1",
                  { "bg-white text-orange-800": pathname === link.url }
                )}
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
              key={`${link.name}sdfsdfijfosjfospwppwpwwww`}
              className={cn(
                "bg-orange-800 text-white font-bold text-lg rounded-lg p-1",
                { "bg-white text-orange-800": pathname === link.url }
              )}
              onClick={() => router.push(link.url)}
            >
              {link.name}
            </button>
          );
        })}
      </div>
      <div
        className="p-2 flex  flex-col items-start  border-b border-black gap-2 
      "
      >
        <Link
          className={cn(
            "bg-orange-800 text-white font-bold text-lg rounded-lg p-1",
            { "bg-white text-orange-800": pathname === "/navigation/dashboard" }
          )}
          href="/navigation/dashboard"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
export default NavLinks;
