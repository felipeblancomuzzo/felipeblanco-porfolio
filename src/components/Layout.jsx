import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';

const Layout = () => {
  const location = useLocation();
  const appRef = useRef(null);

  // Al cambiar de página, vuelve arriba. El scroll está en .App, no en la ventana.
  useEffect(() => {
    appRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="background">
      <div className="App" ref={appRef}>
        <Header />
        {/* key: al cambiar de ruta se vuelve a montar y corre la animación de entrada */}
        <main key={location.pathname} className="page-enter">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton scrollRef={appRef} />
      </div>
    </div>
  );
};

export default Layout;
