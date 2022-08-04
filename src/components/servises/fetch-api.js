import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// const BASE_URL = 'http://localhost:3000';

// async function fetchData(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

export async function fetchAuthors() {
  const response = await axios.get(`/authors`);
  return response.data;
}

export async function fetchAuthorsId(id) {
  const response = await axios.get(`/authors/${id}?_embed=books`);
  return response.data;
}
// ?_embed=books додатково підтягує всі книги які є в цього автора

export async function fetchBooks() {
  const response = await axios.get(`/books`);
  return response.data;
}

export async function fetchBookById(bookId) {
  const response = await axios.get(`/books/${bookId}_expand=author`);
  return response.data;
}
