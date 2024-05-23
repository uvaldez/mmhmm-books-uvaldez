import React from 'react';
import Image from 'next/image';
import Delete from './Delete';

interface IBookItemProps {
  author: string;
  description: string;
  imageUrl: string;
  title: string;
}
export default function BookList({ author, description, imageUrl, title }: IBookItemProps) {
  return (
    <section className="card shadow-2xl">
      <Image src={imageUrl} width={125} height={200} alt='test' className="m-4"/>
      <div>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-xl font-bold mb-3 mt-3'>{title}</h3>
          <Delete/>
        </div>
        <span className='font-medium text-xs mb-3'>{author}</span>
        <p className='text-xs'>{description}</p>
      </div>
    </section>
  )
}
