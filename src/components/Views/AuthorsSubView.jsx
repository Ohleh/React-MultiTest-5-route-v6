import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as bookShelfAPI from '../servises/fetch-api.js';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  //   const author = authors.filter(author => author.id === Number(authorId));

  useEffect(() => {
    bookShelfAPI.fetchAuthorsId(authorId).then(setAuthor);
  }, [authorId]);
  return (
    <>
      {!author && <h2>Завантажуєм...</h2>}
      {author && (
        <>
          <h2>{author.name}</h2>
          <ul>
            {author.books.map(book => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}> {book.title} </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
