'use client';
import React, { useCallback } from 'react';
import PrimaryButton from "@app/components/buttons/Primary";
import Label from "@app/components/labels/FormLabel";
import Input from "@app/components/inputs/FormInput";
import TextArea from "@app/components/inputs/TextArea";
import { useState } from "react";
import Close from '@app/components/features/bookshelf/Close';
import revalidateTag from '@app/utils/revalidateTag';
import { BOOKLIST_TAG } from '@app/data/constants';
import { addBook } from '@app/api/books';

type eventValue = React.ChangeEvent<HTMLInputElement>;
type eventValueTextArea = React.ChangeEvent<HTMLTextAreaElement>;

export default function Add() {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    setError('');
    setIsLoading(true);

    // using a library for data validation like zod its better
    if (title === '' || author === '' || description === '' || imageUrl === '') {
      setError('Invalid data, no empty values are allowed');
      setIsLoading(false);
      return;
    }
    try {
      await addBook({
        title,
        author,
        description,
        imageUrl,
      });
      revalidateTag(BOOKLIST_TAG);
      setTitle('');
      setAuthor('');
      setDescription('');
      setImageUrl('');
      setSuccessMsg('Book Added!');
    } catch (e: any) {
      setError(e.message || 'Error adding book, try again!');
    }
    setIsLoading(false);
  }

  const getSubmitLabel = useCallback(() => {
    return isLoading ? 'loading...' : 'Add Book';
  }, [isLoading]);

  return (
    <>
    <div className="w-[500px] max-w-full flex flex-row justify-between mb-10">
      <h1 className="text-h1 text-5xl font-bold mb-5">
        Add a new book
      </h1>
      <Close/>
    </div>
      <form className="w-[500px] max-w-full flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-10">
          <Label value="Title"/>
          <Input type="text" placeholder="Title" value={title} handleOnChange={(e: eventValue) => setTitle(e.target.value)}/>
        </div>        
        <div className="mb-10">
          <Label value="Author"/>
          <Input type="text" placeholder="Author" value={author} handleOnChange={(e: eventValue) => setAuthor(e.target.value)}/>
        </div>
        <div className="mb-10">
          <Label value="Description"/>
          <TextArea value={description} handleOnChange={(e: eventValueTextArea) => setDescription(e.target.value)}/>
        </div>
        <div className="mb-10">
          <Label value="Image URL"/>
          <Input type="text" placeholder="Image URL" value={imageUrl} handleOnChange={(e: eventValue) => setImageUrl(e.target.value)}/>
        </div>
        {error !== '' && 
          <p className="error mt-2 text-sm text-red-600 mb-10">{error}</p>
        }
        {successMsg !== '' && 
          <p className="success mt-2 text-sm text-green-600 mb-10">{successMsg}</p>
        }
        <div className="container min-w-full flex flex-row items-center">
          <PrimaryButton label={getSubmitLabel()} type="submit"/>
        </div>
      </form>
    </>
  )
}
