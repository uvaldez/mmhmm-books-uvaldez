import { SERVICE_BASE_URL } from "@app/data/constants";

export const getBooks = async () => {
  const response = await fetch(SERVICE_BASE_URL);
  return response.json();
}
