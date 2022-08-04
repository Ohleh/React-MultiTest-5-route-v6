import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

import HomeView from './views/HomeView';
import MovieView from './views/MovieView';
import BookView from './views/BookView';
import NotFoundView from './views/NotFoundView';

// /
// /authors
// /books
// /books/:bookId

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="authors" element={<AuthorsView />}>
            <Route path=":authorsId" element={<AuthorsSubView />} />
            {/* це вкладений маршрут, рендериться нижче, як додоатковий компонент */}
          </Route>
          <Route path="books" element={<BookView />} />
          <Route path="books/:bookId" element={<BookDetailsView />} />
          {/* а це сусіди, як окрема сторінка */}
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  );
};
