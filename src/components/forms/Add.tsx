'use client';
import PrimaryButton from "@app/components/buttons/Primary";
import Label from "@app/components/labels/FormLabel";
import Input from "@app/components/inputs/FormInput";
import { useState } from "react";
import Link from "next/link";

type eventValue = React.ChangeEvent<HTMLInputElement>;

export default function Add() {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitting');
  }

  return (
    <>
    <div className="z-10 items-center justify-between lg:flex mb-10">
      <h1 className="text-h1 text-5xl font-bold">
        Add New Book
      </h1>
      <Link href="/" className="text-white bg-green font-medium rounded-lg text-sm h-11 px-5 py-2.5 me-2 mb-2 ml-10">Go Back</Link>
    </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <Label value="Description"/>
          <Input type="text" value={description} placeholder="Description" handleOnChange={(e: eventValue) => setDescription(e.target.value)}/>
        </div>
        <div className="mb-5">
          <Label value="Image URL"/>
          <Input type="text" placeholder="Image URL" value={imageUrl} handleOnChange={(e: eventValue) => setImageUrl(e.target.value)}/>
        </div>
        <div className="mb-5">
          <Label value="Author"/>
          <Input type="text" placeholder="Author" value={author} handleOnChange={(e: eventValue) => setAuthor(e.target.value)}/>
        </div>
        <div className="mb-5">
          <Label value="Title"/>
          <Input type="text" placeholder="Title" value={title} handleOnChange={(e: eventValue) => setTitle(e.target.value)}/>
        </div>
        <div className="container min-w-full flex flex-col items-center">
          <PrimaryButton label="Add Book" type="submit"/>
        </div>
      </form>
    </>
  )
}
