import { getBooks } from "@app/api/books";
import { IBook } from "@app/services/interfaces/book";
import Link from "next/link";
import Image from "next/image";

export default async function Book({ params }: {
  params: { id: string },
}) {
  // doing it this way since I didn't add state management, next js memoize and cache fetch
  const books = await getBooks();
  const book = books.filter((i:IBook) => i.id === params.id)[0];
  if (!book) {
    return <h1>Book not found!</h1>;
  }

  return (
    <div className="max-w-full items-center justify-between text-center">
      <h1 className="font-bold mb-5 max-w-full">
        {book.title}
      </h1>
      <section className="shadow-2xl p-5 mb-10 mx-auto">
        <Image src={book.imageUrl} width={125} height={200} alt='test' className="m-4" style={{ margin: 'auto' }}/>
        <div>
          <span className='font-medium text-xs mb-3'>{book.author}</span>
          <p className='text-xs mb-10'>{book.description}</p>
        </div>
      </section>
      <Link href="/" className="text-white bg-green font-medium rounded-lg text-center text-sm h-11 px-5 py-2.5 me-2 mb-2">Go Home</Link>
    </div>
  )
}
