import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Головна</Link>
      <Link to="/authors">Автори</Link>
      <Link to="/books">Книги</Link>
    </nav>
  );
};

export default Navigation;
