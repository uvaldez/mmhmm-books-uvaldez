import { API_AUTH, SERVICE_BASE_URL } from "@app/data/constants"
import { IBook } from "@app/services/interfaces/book";

export default class bookAPI {
  private headers: {
    [name: string]: string,
  };
  private baseUrl: string;

  constructor() {
    this.headers = { 'Authorization': API_AUTH };
    this.baseUrl = SERVICE_BASE_URL;
  }

  async get(endpoint:string, cacheTag: string):Promise<IBook[]> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      next: {
        tags: [cacheTag],
      },
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      }
    });
    return response.json() || [];    
  }

  async post(book: IBook, endpoint: string):Promise<IBook> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({ ...book }),
      headers: {
        'Content-Type': 'application/json',
        ...this.headers
      },
    });
    return response.json();    
  }

  async delete(book: IBook, endpoint: string):Promise<IBook> {
    const response = await fetch(`${this.baseUrl}/${endpoint}/${book.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      },
    });
    return response.json();
  }
}
