import React from 'react';
import BookItem from './BookItem';

export default function BookList() {
  const description = 'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the worlds leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.';
  const title = 'Atomicasd Habits';
  const author = 'James Clear';
  return (
    <>
      <BookItem author={author} title={title} description={description}/>
      <BookItem author={author} title={title} description={description}/>
      <BookItem author={author} title={title} description={description}/>
    </>
  )
}
