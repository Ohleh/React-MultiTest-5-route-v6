import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <>
      <h3>
        {' '}
        Ohhh Noooo 😱 404. Перейдіть на
        <Link to="/">домашню сторінку</Link>
      </h3>
    </>
  );
};

export default NotFoundView;
