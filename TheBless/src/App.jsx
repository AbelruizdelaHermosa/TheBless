import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Cambio en la importación de Link
import bannerThebless from '../public/CartelTHEBLESS.png';
import logoTheBless from '../public/logo.jpg';

function App() {

  const [isSticky, setSticky] = useState(false);

  //navegador pegajoso
  const stickyNav = () => {
    window.scrollY > 150 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    return () => {
      window.removeEventListener('scroll', stickyNav);
    };
  }, [])

  const stickyClass = isSticky ? 'sticky-nav': '';


  return (
  <div className={`${stickyClass} flex h-20 w-full items-center justify-between rounded-xl bg-white px-6 shadow-sm dark:bg-gray-600`}>
      <Link className="flex items-center gap-2" to="/">
            <img src={logoTheBless} alt="logo" className="w-10 rounded-2xl" />
      </Link>
        <nav className="flex items-center gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" to="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" to="/">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" to="/">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" to="/">
            Contact
          </Link>
        </nav>
  </div>
  )
};

export default App;
