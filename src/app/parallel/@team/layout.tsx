import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <Link href={"/parallel/ateam"}>Team A</Link>
        <Link href={"/parallel/bteam"}>Team B</Link>
      </div>
      <div className="col-span-2 h-full ">{children}</div>
    </div>
  );
}
export default layout;
