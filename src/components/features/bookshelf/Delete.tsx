'use client';
import React from "react";
import DeleteIcon from "../../icons/Delete";

export default function Delete() {
  const handleOnClick = () => {
    console.log('deleting');
  }

  return (
    <DeleteIcon onClick={handleOnClick} fill="none"/>
  )
}
