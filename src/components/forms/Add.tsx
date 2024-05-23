'use client';
import React from 'react';
import PrimaryButton from "../../components/buttons/Primary";
import Label from "../../components/labels/FormLabel";
import Input from "../../components/inputs/FormInput";
import TextArea from "../../components/inputs/TextArea";
import { useState } from "react";
import Close from '../features/bookshelf/Close';

type eventValue = React.ChangeEvent<HTMLInputElement>;
type eventValueTextArea = React.ChangeEvent<HTMLTextAreaElement>;

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
    <div className="w-[500px] max-w-full flex flex-row justify-between mb-10">
      <h1 className="text-h1 text-5xl font-bold mb-5">
        Add a new book
      </h1>
      <Close/>
    </div>
      <form className="w-[500px] max-w-full bg-gray-200 flex flex-col" onSubmit={handleSubmit}>
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
        <div className="container min-w-full flex flex-row items-center">
          <PrimaryButton label="Add Book" type="submit"/>
        </div>
      </form>
    </>
  )
}
