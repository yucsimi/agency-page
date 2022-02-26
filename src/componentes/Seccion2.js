import React from 'react';


import '../styles/seccion2.css'

import doodle2 from '../aseets/doodle2.png'
import saly2 from '../aseets/Saly-5.png'
import bang from '../aseets/Bag.png'
import buy from '../aseets/Buy.png'
import ticket from '../aseets/Ticket.png'
import circle from '../aseets/Circle.png'
import square from '../aseets/Square.png'
import disscount from '../aseets/Discount.png'
import doodle3 from '../aseets/doodle-3.png'
import saly3 from '../aseets/Saly-22.png'






const Seccion2 = () => {
    return (


        <div className='seccion2 row'>

            <div className='d-flex seccion2-navbar '>
                <span className='doodle2'><img alt='doodle2' src={doodle2} /></span>


                <p className='seccion2-title col-3'>Simplify your online shipping for free this month!</p>


                <span className='seccion2-imagen '><img alt='saly2' src={saly2} /></span>


                <p className='seccion2-subtitle col-3'>Grow your business with better Shipping organizations</p>
            </div>






            <div className='d-flex cartas '>
                <div className='col-3' >
                    <span><img alt='bang' src={bang} /></span>
                    <p className=''>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>
                <div className='col-3 '>
                    <span><img alt='buy' src={buy} /></span>
                    <p className=''>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>

            </div>


            <div className='d-flex   segundasCartas'>
                <div className='col-3  '>
                    <span><img alt='ticket' src={ticket} /></span>
                    <p className='py-4'>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>


                <div className='col-3r'>
                    <span><img alt='circle' src={circle} /></span>
                    <p className=''>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>


                <div className='col-3  '>
                    <span><img alt='square' src={square} /></span>
                    <p className=''>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>

                <div className='col-3 '>
                    <span><img alt='disccount' src={disscount} /></span>
                    <p className=''>Et has minim elitr intellegat.Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>
            </div>

            <span className='doodle3'><img alt='doodle3' src={doodle3} /></span>

            <div className='d-flex terceraParte '>

                <span className='col-5  mx-5'><img alt='saly3' src={saly3} /></span>

                <div className=' seccion2-texto  '>
                    <p className='seccion2-titulo'> We scratch, build and play together </p>
                    <p className='seccion2-subtitulo col-7'> We scratch, build and play together</p>
                    <p className='infor-seccion2 col-6'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>


                </div>

            </div>
        </div>
    );
}

export default Seccion2;