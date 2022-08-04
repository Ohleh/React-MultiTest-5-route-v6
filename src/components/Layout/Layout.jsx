import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <container>
      <AppBar />
      <Outlet />
    </container>
  );
};

export default Layout;
