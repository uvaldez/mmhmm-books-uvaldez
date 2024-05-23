import React from 'react';
import BookItem from './BookItem';
import { IBook } from '@app/services/interfaces/book';
import { getBooks } from '@app/api/books';

export default async function BookList() {
  const books = await getBooks();
  return (
    <>
    {books.length === 0 &&
      <p className='text-center'>No books found!</p>
    }
    {books.map((book: IBook, i: number) => {
      return <BookItem key={i} author={book.author} description={book.description.slice(0, 300)} imageUrl={book.imageUrl} title={book.title}/>
    })}
    </>
  )
}
