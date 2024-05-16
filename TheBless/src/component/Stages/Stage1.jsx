import React from 'react';
import Footer from '../Footer';
import ReturHome from '../Return';
import logo from '../../../public/THEBLESSBOLSA.png'
import camiseta1 from '../../../public/producto1.png'
import camiseta2 from '../../../public/producto2.png'
import prueba1 from '../../../public/bannerMAKEIT.png'
import './Stage.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed' ;


function StageOne () {
    return (
        <div>
            <div>
                <ReturHome />
            </div>

            <div>
                    <img className='sm:w-4/5 mx-auto' src={logo} alt="logoThebless" />
            </div>

            <div className='conatiner mx-auto py-20 sm:w-4/6'>
                    <iframe  className='mx-auto md:w-full md:h-screen'
                    src="https://www.youtube.com/embed/K2NcGYajvY4?si=YvnDZ1iisrnXAvsW" 
                    title="YouTube video player"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>


            <div className='pt-28'>
                <h1 id="titulo" className="text-center text-5xl md:text-6xl p-2">STAGE 1</h1>
                <h1 id="titulo" className="text-center text-3xl md:text-4xl">MONEY GOD TEE</h1>
            </div>
            

            <aside className="w-11/12 mx-auto p-2">
                <div className="flex flex-col mx-auto md:p-20 sm:p-8 m-8">
                    <div className="md:flex sm:none bg-neutral-100 rounded-lg shadow-2xl mt-8 items-start">
                        <img src={camiseta1} alt="camiseta1" className="md:w-2/6 sm:w-full p-6 rounded-xl"/>
                        <div className="mx-auto p-8">
                            <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x BLACK</h3>
                            <p className="text-gray-500 mt-2">Descripción o cualquier otro contenido</p>
                        </div>
                    </div>
                    <div className="md:flex sm:none bg-neutral-100 rounded-lg shadow-2xl mt-8 items-start">
                        <img src={camiseta2} alt="camiseta2" className="md:w-2/6 sm:w-full p-6 rounded-xl"/>
                        <div className="mx-auto p-8">
                            <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x WHITE</h3>
                            <p className="text-gray-500 mt-2">Descripción o cualquier otro contenido</p>
                        </div>
                    </div>
                </div>
            </aside>


            <Footer />
        </div>
    )
}

export default StageOne;