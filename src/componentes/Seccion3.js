import React from 'react';

import '../styles/seccion3.css'


import saly6 from '../aseets/Saly-6.png'

const Seccion3 = () => {
    return (

        <div className='seccion3 row'>

            <div className='navbarSeccion3 d-flex '>


                <div className=' m-auto seccion3-input'>

                    <p className=' seccion3-titulo '>Grow your business with better
                        Shipping organizations</p>


                    <form className=' formulario d-flex col-12 col-md-9 '>

                        <input type='text' placeholder='Write your mail address' />
                        <p className='boton2'>Subscribe</p>
                    </form>

                </div>


                <span className='seccion3-Imagen sborder'><img src={saly6} /></span>




            </div>
            <p className='seccion3-title  '>The best design for your studio website</p>


            <div className='d-flex seccion3-cartas row '>


                <div className='seccion3-primeraCarta col-8 col-md-3 mx-2'>
                    <p className='Carta-title'>Audit</p>
                    <p className='Carta-text'>Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.
                        Ac aliquam ac volutpat, viverra magna risus. </p>
                    <p className='primeraCarta-subtitle'>Experienced team</p>
                </div>


                <div className='seccion3-segundaCarta col-8 col-md-3 mx-2 mx-2'>

                    <p className='Carta-title'>Teamwork</p>
                    <p className='Carta-text'>Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.
                        Ac aliquam ac volutpat, viverra magna risus. </p>
                    <p className='segundaCarta-subtitle'>Experienced team</p>

                </div>

                <div className='seccion3-terceraCarta col-8 col-md-3 col-8 mx-2'>

                    <p className='Carta-title'>Create</p>
                    <p className='Carta-text'>Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.
                        Ac aliquam ac volutpat, viverra magna risus. </p>
                    <p className='terceraCarta-subtitle'>Experienced team</p>


                </div>



            </div>

        </div>
    );
}

export default Seccion3;