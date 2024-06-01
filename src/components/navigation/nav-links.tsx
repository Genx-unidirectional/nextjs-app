import Link from "next/link";

function NavLinks() {
  return (
    <div className="h-full flex flex-col items-start my-10 p-4 w-full">
      <div>
        <Link
          className="text-3xl  border-b border-black font-bold text-black mb-4"
          href="/navigation"
        >
          Home
        </Link>
      </div>
      <div
        className="p-2 flex  flex-col items-start  border-b border-black gap-2 
      "
      >
        <h3 className="font-medium text-xl text-black">
          This is link based routing
        </h3>
        <div>
          <Link
            className="bg-orange-800 text-white font-bold text-lg rounded-lg p-1"
            href="/navigation/page2"
          >
            Page 2
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavLinks;
