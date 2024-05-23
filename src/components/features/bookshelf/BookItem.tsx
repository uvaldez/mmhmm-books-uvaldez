import React from 'react';
import Image from 'next/image';
import Delete from './Delete';
import { IBook } from '@app/services/interfaces/book';

interface IBookItemProps {
  book: IBook
};

export default function BookList({ book }:IBookItemProps) {
  const { author, description, imageUrl, title } = book;

  return (
    <section className="card shadow-2xl">
      <Image src={imageUrl} width={125} height={200} alt='test' className="m-4"/>
      <div>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-xl font-bold mb-3 mt-3'>{title}</h3>
          <Delete book={book}/>
        </div>
        <span className='font-medium text-xs mb-3'>{author}</span>
        <p className='text-xs'>{(description || '').slice(0, 300)}</p>
      </div>
    </section>
  )
}
