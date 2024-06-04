import Link from "next/link";

function page() {
  const imageArr = Array.from({ length: 9 }, (_, idx) => idx);
  return (
    <div className="h-[500px] w-[500px] grid grid-cols-3 gap-2 grid-rows-3">
      {imageArr.map((img) => {
        return (
          <Link
            href={`/intercept/photos/${img}`}
            className="flex justify-center items-center bg-white font-bold text-5xl text-black rounded-lg"
          >
            {img}
          </Link>
        );
      })}
    </div>
  );
}
export default page;
