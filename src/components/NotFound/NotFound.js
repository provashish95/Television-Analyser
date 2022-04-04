import React from 'react';
import './NotFound.css';
import Img from '../../assets/image/notFound.png';


const NotFound = () => {
    return (
        <div className='text-center my-5' >
            <img src={Img} alt="notFoundImg" className='errorImg' />
            <h1 className='text-danger fw-bolder '>404</h1>
            <h3 className='text-muted mb-4'>Sorry, The Page Not Found</h3>
            <p className='text-muted fw-bold mb-5'>The page you requested could not be found !</p>
        </div >
    );
};

export default NotFound;