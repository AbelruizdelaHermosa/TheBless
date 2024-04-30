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
  <div>
    <nav className={`navbar ${stickyClass} flex h-20 w-full items-center justify-between rounded-xl bg-white px-6 shadow-sm dark:bg-gray-600`}>
        <Link className="flex items-center gap-2" to="/">
              <img src={logoTheBless} alt="logo" className="w-10 rounded-2xl" />
        </Link>
          <div className="flex items-center gap-6">
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
          </div>
    </nav>

    <div className="p-10">
      <a className="block w-2/3 mx-auto" href="https://www.instagram.com/bythebless" target="_blank" rel="noopener noreferrer">
        <img src={bannerThebless} alt="banner" className="w-full" />
      </a>
    </div>

    <aside className="w-full sm:w-3/4 mx-auto pt-20 pb-18">
      <h1 className="text-center text-4xl font-mono italic">STAGE 1:</h1>
      <h1 className="text-center text-4xl font-mono italic">MONEY GOD TEE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <img src="../public/producto1.png" alt="camiseta1" className="w-full h-auto"/>
            <div className="mt-4">
              <h3 className="text-center text-lg font-bold">Titulo camiseta</h3>
            </div>  
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4">
            <img src="../public/producto2.png" alt="camiseta1" className="w-full h-auto"/>
            <div className="mt-4">
              <h3 className="text-center text-lg font-bold">Titulo camiseta</h3>
            </div>  
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4">
            <img src="../public/producto3.png" alt="camiseta1" className="w-full h-auto"/>
            <div className="mt-4">
              <h3 className="text-center text-lg font-bold">Titulo camiseta</h3>
            </div>  
          </div>
      </div>
    </aside>

  </div>
  )
};

export default App;
