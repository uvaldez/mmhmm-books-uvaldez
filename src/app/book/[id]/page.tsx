import { getBooks } from "@app/api/books";
import { IBook } from "@app/services/interfaces/book";
import Link from "next/link";
import Image from "next/image";

export default async function Book({ params }: {
  params: { id: string },
}) {
  const bookData = await getBookData(params)
  if (!bookData) {
    return (
    <div className="max-w-full items-center justify-between text-center mt-10">
      <h1>Book not found!</h1>
      <Link href="/" className="text-white bg-green font-medium rounded-lg text-center text-sm h-11 px-5 py-2.5 me-2 mb-2">Go Home</Link>
    </div>
  );
}

  return (
    <div className="max-w-full items-center justify-between text-center">
      <h1 className="font-bold mb-5 max-w-full">
        {bookData.title}
      </h1>
      <section className="shadow-2xl p-5 mb-10 mx-auto">
        <Image src={bookData.imageUrl} width={125} height={200} alt='test' className="m-4" style={{ margin: 'auto' }}/>
        <div>
          <span className='font-medium text-xs mb-3'>{bookData.author}</span>
          <p className='text-xs mb-10'>{bookData.description}</p>
        </div>
      </section>
      <Link href="/" className="text-white bg-green font-medium rounded-lg text-center text-sm h-11 px-5 py-2.5 me-2 mb-2">Go Home</Link>
    </div>
  )
}


async function getBookData(params: {id: string}) {
  const books = await getBooks();
  const bookData = books.filter((book: IBook) => book.id === params.id)[0];
  return bookData
}

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book: IBook) => {
    return { id: book.id }
  });
}

