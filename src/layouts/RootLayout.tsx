import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
