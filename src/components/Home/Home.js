import React from 'react';
import './Home.css';
import image from '../../assets/image/sony.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews] = useReviews();

    const navigate = useNavigate();

    const shortReviews = reviews.slice(0, 3);


    return (
        <>
            <section className='container'>
                <div className="row align-items-center my-3">
                    <div className="col-sm-12 col-md-6 order-2 order-md-1 order-lg-1 p-5">
                        <h2 className='text-center fw-bold title-style'>Television Analyser</h2>
                        <p className=' text-style   py-3 fw-bold text-center'>Take vision and sound to the next level with Cognitive Processor XR™. Our revolutionary processor on Sony BRAVIA XR™ TVs reproduces content the way humans see and hear for an incredibly lifelike experience. It understands how the human eye focuses, cross analysing images to give real life depth, extraordinary contrast and beautifully vivid colours.  </p>
                        <p className='text-center'><button className='btn  btn-style'>Live Demo</button></p>
                    </div>
                    <div className="col-sm-12 col-md-6 order-1 order-md-2 order-lg-2  p-4">
                        <img className='img-fluid rounded-3' src={image} alt="sonyTv" />
                    </div>
                </div>

            </section>
            <div className="container">
                <h2 className='text-center fw-bold title-style'>Customer reviews</h2>
                <div className="row">
                    {
                        shortReviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <p className='text-center'><button onClick={() => navigate('/reviews')} className='btn  btn-style'>See all reviews</button ></p>
            </div>
        </>
    );
};

export default Home;