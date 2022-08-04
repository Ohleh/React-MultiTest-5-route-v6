import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import * as fetchBookshelf from '../services/fetch-api.js';

const BookView = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchBookshelf.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading> Книги</PageHeading>
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookView;
