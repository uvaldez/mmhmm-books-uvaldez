'use client';
import React, { useState } from "react";
import DeleteIcon from "../../icons/Delete";
import Modal from "@app/components/modals/Confirmation";
import { IBook } from "@app/services/interfaces/book";
import { deleteBook } from "@app/api/books";
import revalidateTag from "@app/utils/revalidateTag";
import { BOOKLIST_TAG } from "@app/data/constants";

interface IDeleteProps {
  book: IBook;
}

export default function Delete({ book }: IDeleteProps) {
  const [openModal, setOpenModal] = useState(false);
  const [confirmLabel, setConfirmLabel] = useState('Delete');

  const handleOnClick = () => {
    setOpenModal(true);
  }

  const handleConfirm = async () => {
    setConfirmLabel('Deleting...');
    await deleteBook(book);
    revalidateTag(BOOKLIST_TAG);
    setOpenModal(false);
  }

  return (
    <>
      {openModal &&
        <Modal
          onClose={() => setOpenModal(false)}
          onConfirm={handleConfirm}
          confirmLabel={confirmLabel}
          title="Delete this book?"
          message={`${book.title}`}/>
      }
      <DeleteIcon onClick={handleOnClick} fill="none"/>
    </>
  )
}
