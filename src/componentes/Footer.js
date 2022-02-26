import React from 'react';

import '../styles/footer.css'


import doodle from '../aseets/doodle7.png'
import doodle61 from '../aseets/doodle61.png'
import doodle51 from '../aseets/doodle51.png'

import egency from '../aseets/egency.png'
import visa from '../aseets/visa.png'
import american from '../aseets/american.png'
import paypal from '../aseets/paypal.png'
import mastercard from '../aseets/mastercard.png'
import stripe from '../aseets/stripe.png'
import bitcoin from '../aseets/bitcoin.png'
import bancontact from '../aseets/bancontact.png'

const Footer = () => {
    return (

        <div className='footer row'>
            <div className=''>

                <span className='doodle col-6 col-md-2'><img src={doodle} /></span>


            </div>





            <div className='footer-top row '>

                <div className=' footer-Iparte   col-10 col-md-4 offset-1'>

                    <span className=' egency  '><img src={egency} /></span>
                    <p className='  textoo'> Et has minim elitr intellegat.  Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>


                </div>


                <div className='d-flex footer-IIparte  d-flex col-5 '>



                    <div className='footer-pages mx-3'>
                        <p className=' pages '>Pages</p>

                        <li className='lista d-block '>
                            <ul className=''>Templates</ul>
                            <ul>Price</ul>
                            <ul>help</ul>
                            <ul>contact</ul>

                        </li>

                    </div>


                    <div className='footer-demos  mx-4'>
                        <p className=' demos'>Demos</p>

                        <li className=' segundaLista '>


                            <ul>Dark theme</ul>
                            <ul>Light theme</ul>
                            <ul>Classic theme</ul>

                        </li>
                    </div>


                    <div className='footer-resourses mx-4'>
                        <p className=' resourses '>Resorses</p>

                        <p className=' terceraLista '>Documantation</p>

                    </div >

                </div>



            </div >











            <div className='d-flex footer-IIIparte '>
                <p >New York</p>
                <p>Dubai</p>
                <p>Dhaka</p>
                <p>Mumbai</p>
                <p>Sydney </p>



            </div>


            <div className='barra-boton  '></div>



            <div className='col-2 col-md-12 '>
                <span className='doodle61'><img src={doodle61} /></span>


            </div>

            <div className='row'>


                <div className=' pay-mode '>

                    <span className='m-3 my-2 visa '><img src={visa} /></span>
                    <span className='m-3 american'><img src={american} /></span>
                    <span className='m-3 paypal'><img src={paypal} /></span>
                    <span className='m-3 mastercard'> <img src={mastercard} /></span>
                    <span className='m-3 stripe'><img src={stripe} /></span>
                    <span className='m-3 bitcoin'><img src={bitcoin} /></span>
                    <span className='m-3 bancontact'><img src={bancontact} /></span>




                </div>

                <div className='footer-copyrit p-4  col-8 col-md-7 '>
                    <p className='all-rights'>© 2019-2020 All Rights Reserved.</p>

                    <p className='terms'>Terms of Service</p>
                </div>




            </div >

            <div className='col-2 col-md-12'>
                <span className='doodle51 '><img src={doodle51} /></span>
            </div>





        </div >
    );
}

export default Footer;