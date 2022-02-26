import React from 'react';


import '../styles/navbar.css'

import egency from '../aseets/egency.png'
const Navbar = () => {
    return (

        <div className='navbar  '>

            <div className='navbar-logo '>
                <span><img src={egency} /></span>

            </div>
            <div className='d-flex navbar-texto'>
                <p className='about'>About</p>
                <p>Products</p>
                <p>Contact</p>
                <p>Help</p>

            </div>
            <div className='d-flex navbar-boton mx-3 '>
                <p className='mx-2 SingIng'>Sing In</p>
                <p className='mx-2 boton'>Sing Up</p>
            </div>
        </div>

    );
}

export default Navbar;