import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
      <h1 className="text-h1 text-5xl font-bold">
        Bookshelf
      </h1>
      <Link href="/add" className="text-white bg-green font-medium rounded-lg text-sm h-11 px-5 py-2.5 me-2 mb-2">Add Book</Link>
    </div>
  );
}
