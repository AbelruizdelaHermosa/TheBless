import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Cambio en la importación de Link
import bannerThebless from '../public/CartelTHEBLESS.png';
import logoTheBless from '../public/THEBLESSBOLSA.png';
import './App.css'
import Footer from './component/Footer'
import { FaHome } from "react-icons/fa";

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
    <nav className={`navbar ${stickyClass} flex h-20 w-11/12 items-center justify-between mx-auto rounded-xl mt-4 bg-white px-10 shadow-sm dark:bg-gray-600`}>
        <Link className="flex items-center gap-2" to="/">
              <img src={logoTheBless} alt="logo" className="w-40 rounded-2xl" />
        </Link>
          <div className="flex items-center gap-10">
          <Link className="text-lg font-medium hover:underline underline-offset-4 text-white" to="/">
              Home
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4 text-white" to="/">
              About
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4 text-white" to="/">
              Services
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4 text-white" to="/">
              Contact
            </Link>
          </div>
    </nav>

    <div className="pt-20 pb-32">
      <a className="block w-7/12 mx-auto" href="https://www.instagram.com/bythebless" target="_blank" rel="noopener noreferrer">
        <img src={bannerThebless} alt="banner" className="w-full" />
      </a>
    </div>

    <hr className="my-6 w-5/6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

    <aside className="sm:w-3/4 mx-auto pb-20">
      <h1 id="titulo" className="text-center text-6xl p-8">STAGE 1</h1>
      <h1 id="titulo" className="text-center text-4xl">MONEY GOD TEE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 pb-10 m-8">
          <div className="bg-neutral-100 rounded-lg shadow-2xl p-4 hover:scale-105">
            <img src="../public/producto1.png" alt="camiseta1" className="w-full h-auto"/>
            <div className="mt-4">
              <h3 className="text-center text-lg text-gray-600">Titulo camiseta</h3>
            </div>  
          </div>
          <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
            <img src="../public/producto2.png" alt="camiseta1" className="w-full h-auto"/>
            <div className="mt-4">
              <h3 className="text-center text-lg text-gray-600">Titulo camiseta</h3>
            </div>  
          </div>
          <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
            <img src="../public/producto3.png" alt="camiseta1" className="w-full h-auto rounded-lg"/>
            <div className="mt-4">
              <h3 className="text-center text-lg text-gray-600">Titulo camiseta</h3>
            </div>  
          </div>
      </div>
    </aside>

    <div>
      <Footer />
    </div>

  </div>
  )
};

export default App;
