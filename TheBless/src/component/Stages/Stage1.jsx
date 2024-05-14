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

            <div className='mx-auto pt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 p-20 m-8">
                    <img src={prueba1} alt="prueba" />
                </div>
            </div>


            <aside className="sm:w-1/4 mx-auto pt-10 h-[500px]">
                <h1 id="titulo" className="text-center text-5xl md:text-6xl p-8">STAGE 1</h1>
                <h1 id="titulo" className="text-center text-3xl md:text-4xl">MONEY GOD TEE</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-20 pt-10 pb-10 m-8">
                    <div className="bg-neutral-100  rounded-2xl shadow-2xl p-4 hover:scale-110">
                        <img src={camiseta1} alt="camiseta1" className="w-full h-auto"/>
                        <div className="mt-4">
                            <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x BLACK</h3>
                        </div>  
                    </div>
                    <div className="bg-neutral-100 rounded-lg shadow-xl p-4 hover:scale-110">
                        <img src={camiseta2} alt="camiseta1" className="w-full h-auto"/>
                        <div className="mt-4">
                            <h3 className="text-center text-lg text-gray-600">MONEY GOD TEE x WHITE</h3>
                        </div>  
                    </div>
                </div>
            </aside>

            <Footer />
        </div>
    )
}

export default StageOne;