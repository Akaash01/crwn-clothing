import Directory from '../components/directory/Directory.component';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
