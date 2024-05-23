'use client';
import React from "react";
import CloseIcon from "../../icons/Close";
import { useRouter } from 'next/navigation';


export default function Close() {
  const { push } = useRouter();

  const handleOnClick = () => {
    console.log('redirecting');
    push('/')
  }

  return (
    <CloseIcon onClick={handleOnClick} fill="none"/>
  )
}
