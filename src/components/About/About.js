import React from 'react';
import '../Home/Home.css';
import AboutImg from '../../assets/image/about-img.png';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const About = () => {
    return (
        <div className="container">
            <div className="row my-5 align-items-center">
                <div className="col-sm-12 col-md-6">
                    <h2 className='text-center fw-bolder title-style'>About Us</h2>
                    <p className='text-center fw-bold text-style'>Television analyzer is a fast growing reviews website here others customer showing all reviews about products. And any company can add their product on the television analyser website for better sells. Contact us at <span><MailIcon style={{ width: '21px' }}></MailIcon></span>  provashishroy95@gmail.com <br></br><span><PhoneIcon style={{ width: '21px' }}></PhoneIcon></span>Call: 01632544810 </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={AboutImg} alt="aboutImg" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default About;