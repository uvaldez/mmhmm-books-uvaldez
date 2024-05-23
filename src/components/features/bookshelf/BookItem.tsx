import React, { useCallback } from 'react';
import Image from 'next/image';
import Delete from './Delete';
import { IBook } from '@app/services/interfaces/book';
import Link from 'next/link';
import { DESCRIPTION_MAX_LENGTH } from '@app/data/constants';

interface IBookItemProps {
  book: IBook
};

export default function BookList({ book }:IBookItemProps) {
  const { id, author, description, imageUrl, title } = book;

  const getDescription = useCallback(() => {
    if (description.length >= DESCRIPTION_MAX_LENGTH) {
      return `${(description || '').slice(0, DESCRIPTION_MAX_LENGTH)}...`;
    }
    return description;
  },[description]);

  return (
    <section className="card shadow-2xl">
      <Image src={imageUrl} width={125} height={200} alt='test' className="m-4"/>
      <div>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-xl font-bold mb-3 mt-3'>{title}</h3>
          <Delete book={book}/>
        </div>
        <span className='font-medium text-xs mb-3'>{author}</span>
        <p className='text-xs mb-4'>{getDescription()}</p>
        <Link className='text-white bg-green font-medium rounded-lg text-sm px-5 py-2.5 mb-2' href={`/book/${id}`}>View More</Link>
      </div>
    </section>
  )
}
