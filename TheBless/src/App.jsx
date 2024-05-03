import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Cambio en la importación de Link
import bannerThebless from '/CartelTHEBLESS.png';
import logoTheBless from '/THEBLESSBOLSA.png';
import prueba1 from '/logo.jpg'
import prueba2 from '/diseño.png'
import './App.css'
import Footer from './component/Footer'
import ImageCarousel from './component/Banner'; // Cambio en la importación del componente

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

  const images = [
    bannerThebless,
    prueba1,
    prueba2
  ]

  return (
    <div>
      <nav className={`navbar ${stickyClass} flex h-20 w-11/12 items-center justify-between mx-auto rounded-xl mt-4 bg-white px-10 mb-10 shadow-sm dark:bg-gray-600`}>
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

      <div className="relative mx-auto w-4/5 overflow-hidden h-screen">
        <ImageCarousel images={images}/>
      </div>

      <hr className="my-6 w-5/6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <aside className="sm:w-3/4 mx-auto pb-1">
        <h1 id="titulo" className="text-center text-6xl p-8">STAGE 1</h1>
        <h1 id="titulo" className="text-center text-4xl">MONEY GOD TEE</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 pb-10 m-8">
            <div className="bg-neutral-100 rounded-lg shadow-2xl p-4 hover:scale-105">
              <img src="/producto1.png" alt="camiseta1" className="w-full h-auto"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x BLACK</h3>
              </div>  
            </div>
            <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
              <img src="/producto2.png" alt="camiseta1" className="w-full h-auto"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x WHITE</h3>
              </div>  
            </div>
            <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
              <img src="/producto3.png" alt="camiseta1" className="w-full h-auto rounded-lg"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">COMING SOON...</h3>
              </div>  
            </div>
        </div>
      </aside>
      
      <hr className="my-6 pb-20 w-5/6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div>
        <Footer />
      </div>

    </div>
  )
};

export default App;

