import React, { useState, useEffect, useRef } from 'react';
import stage1 from '../../public/diseño.png';

function Modal({ isOpen, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
      if (isOpen) {
        // Bloquear el scroll de la página principal cuando el modal está abierto
        document.body.style.overflow = 'hidden';
        modalRef.current.focus();
      } else {
        // Habilitar el scroll de la página principal cuando el modal se cierra
        document.body.style.overflow = 'auto';
      }
    }, [isOpen]);
  
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
  
    if (!isOpen) return null;

  return (

        <div className="fixed inset-0 overflow-auto bg-black bg-opacity-75 z-50">
           <div className='p-10'>
            <button onClick={onClose} >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
                </svg>
            </button>  
            </div> 

            <div className='flex pl-20'>
                <div
                ref={modalRef}
                tabIndex={-1}
                onKeyDown={handleKeyDown} 
                className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8 w-2/3'>

                    <div>
                    <img src={stage1} alt="camiseta1" className="w-full"/>
                    </div>

                    <div>
                    <img src={stage1} alt="camiseta1" className="w-full"/>
                    </div> 
                </div> 
            </div>
        </div> 
  );
}

export default Modal;
