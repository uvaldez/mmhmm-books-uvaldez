import { BOOKLIST_TAG, BOOKSLIST_ENDPOINT, BOOKS_DELETE_ENDPOINT, BOOKS_POST_ENDPOINT, SERVICE_BASE_URL } from "@app/data/constants";
import { IBook } from "@app/services/interfaces/book";

export const getBooks = async () => {
  const response = await fetch(`${SERVICE_BASE_URL}/${BOOKSLIST_ENDPOINT}`, {
    next: {
      tags: [BOOKLIST_TAG],
    },
    headers: {
      'Authorization': 'uzielvaldez',
    }
  });
  return response.json();
}

export const addBook = async (book:IBook) => {
  const response = await fetch(`${SERVICE_BASE_URL}/${BOOKS_POST_ENDPOINT}`, {
    method: 'POST',
    body: JSON.stringify({ ...book }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'uzielvaldez',
    },
  });
  return response.json();
}

export const deleteBook = async (book:IBook) => {
  const response = await fetch(`${SERVICE_BASE_URL}/${BOOKS_DELETE_ENDPOINT}/${book.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'uzielvaldez',
    },
  });
  return response.json();
}
