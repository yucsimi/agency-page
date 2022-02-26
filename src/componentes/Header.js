import React from 'react';

import '../styles/header.css'

import saly from '../aseets/Saly.png'
const Header = () => {
    return (
        <div className='header row'>

            <div className='col-12 col-md-5 '>
                <span className='header-logo '><img alt='saly' src={saly} /></span>

            </div>


            <div className=' header-texto col-12 col-md-5 '>
                <p className='header-titulo'> We scratch, build and play together </p>
                <p className='header-subtitle'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                <p className='header-boton'>Contact us</p>


            </div>
        </div>
    );
}

export default Header;