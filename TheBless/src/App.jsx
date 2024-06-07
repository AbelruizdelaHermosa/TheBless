import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Cambio en la importación de Link
import bannerThebless from '/CartelTHEBLESS.png';
import logoTheBless from '/THEBLESSBOLSA.png';
import banner1 from '/bannerthebless.png';
import banner2 from '/bannerMAKEIT.png';
import './App.css'
import Footer from './component/Footer'
import ImageCarousel from './component/Banner';
import Modal from './component/Modal' // Cambio en la importación del componente

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    bannerThebless,
    banner1,
    banner2
  ]

  return (
    <div>
     <nav className="navbar flex h-20 md:h-24 lg:h-20 w-full md:w-11/12 items-center justify-between mx-auto rounded-xl mt-4 bg-white px-5 md:px-10 mb-10 shadow-sm dark:bg-gray-600">
        <Link className="flex items-center gap-2" to="/">
          <img src={logoTheBless} alt="logo" className="w-32 md:w-40 lg:w-44 rounded-2xl" />
        </Link>
        <div className="flex items-center gap-5 sm:gap-2 md:gap-10">
          <button className="text-base font-medium hover:underline underline-offset-4 text-white" onClick={() => setIsModalOpen(true)}>
            Stages
          </button>
          <Link className="text-base font-medium hover:underline underline-offset-4 text-white" to="/">
            Home
          </Link>
          <Link className="text-base font-medium hover:underline underline-offset-4 text-white" to="/">
            Contact
          </Link>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      


      <div className="relative mx-auto w-4/5 overflow-hidden md:h-screen py-10">
        <ImageCarousel images={images}/>
      </div>

      <hr className="my-6 w-full md:w-5/6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:mt-32" />


      <aside className="lg:w-3/4 w-10/12 mx-auto pt-10">
        <h1 id="titulo" className="text-center text-5xl md:text-6xl p-8">STAGE 1</h1>
        <h1 id="titulo" className="text-center text-3xl md:text-4xl">MONEY GOD TEE</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 pb-10 m-8">
            <div className="bg-neutral-100  rounded-2xl shadow-2xl p-4 hover:scale-110">
              <img src="/producto1.png" alt="camiseta1" className="w-full h-auto rounded-sm"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x BLACK</h3>
              </div>  
            </div>
            <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
              <img src="/producto2.png" alt="camiseta1" className="w-full h-auto rounded-sm"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x WHITE</h3>
              </div>  
            </div>
            <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
              <img src="/producto3.png" alt="camiseta1" className="w-full h-auto rounded-sm"/>
              <div className="mt-4">
                <h3 className="text-center text-lg text-gray-600">COMING SOON...</h3>
              </div>  
            </div>
        </div>
      </aside>
      
      <hr className= "p-20 my-6 w-full md:w-5/6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div>
        <Footer />
      </div>

    </div>
  )
};

export default App;

