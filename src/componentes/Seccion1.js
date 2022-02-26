import React from 'react';

import '../styles/seccion1.css'

import dodle from '../aseets/doodle.png'
import uno from '../aseets/uno.png'
const Seccion1 = () => {
    return (

        <div className='d-block seccion1 row'>



            <span className=' seccion1-doodle col-12 col-md-2'><img alt='dodle' src={dodle} /></span>




            <div className='d-flex row p-0'>

                <div className=' seccion1-information \col-10 col-md-8 '>
                    <p className='information'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                    <p className='information-2'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                    <p className='information-3 '>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                </div>



                <span className="seccion1-imagen  col-8 col-lg-3 \"> <img alt='uno' src={uno} /></span>

            </div>

        </div>
    );
}

export default Seccion1;