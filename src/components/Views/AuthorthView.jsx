import { useEffect } from 'react';
import { NavLink, Outlet, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/fetch-api.js';

export default function AuthorthView() {
  //   const match = useRouteMatch();
  const { url, path } = useRouteMatch();
  const [authors, setAuthorth] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthor);
  }, []);

  return (
    <>
      <PaheHeading text="Атори" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Outlet />
    </>
  );
}
