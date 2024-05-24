import React, { Suspense } from 'react';
import Link from "next/link";
import BookList from '../components/features/bookshelf/BookList';
import Loading from '@app/components/loading/Loading';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
    <div className="w-[601px] max-w-full items-center justify-between lg:flex text-center">
      <h1 className="font-bold mb-5">
        Bookshelf
      </h1>
      <Link href="/add" className="text-white bg-green font-medium rounded-lg text-center text-sm h-11 px-5 py-2.5 me-2 mb-2">Add Book</Link>
    </div>
    <div className="flex flex-col items-center justify-between mt-10">
      <Suspense fallback={<Loading/>}>
        <BookList/>
      </Suspense>
    </div>
    </main>
  );
}
