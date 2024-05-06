import React, { useState, useEffect, useRef } from 'react';
import stage1 from '../../public/diseño.png';

function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown} 
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-2/3'>
        <div>
        <img src={stage1} alt="camiseta1" className="w-full"/>
        </div>

        <div>
        <img src={stage1} alt="camiseta1" className="w-full"/>
        </div> 
        </div>
        <button onClick={onClose}>
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
  );
}

export default Modal;
