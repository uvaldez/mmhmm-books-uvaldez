import { BOOKLIST_TAG, BOOKSLIST_ENDPOINT, BOOKS_DELETE_ENDPOINT, BOOKS_POST_ENDPOINT } from "@app/data/constants";
import { IBook } from "@app/services/interfaces/book";
import BooksApi from "./booksApi";

const booksApi = new BooksApi();

export const getBooks = async ():Promise<IBook[]> => {
  return await booksApi.get(BOOKSLIST_ENDPOINT, BOOKLIST_TAG);
}

export const addBook = async (book:IBook): Promise<IBook> => {
  return booksApi.post(book, BOOKS_POST_ENDPOINT);
}

export const deleteBook = async (book:IBook): Promise<IBook> => {
  return booksApi.delete(book, BOOKS_DELETE_ENDPOINT);
}
