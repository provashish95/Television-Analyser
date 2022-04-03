import React from 'react';
import './Home.css';
import logo from '../images/sony.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    const navigate = useNavigate();

    return (
        <>
            <section className='container'>
                <div className="row align-items-center my-3">
                    <div className="col col-md-8 border border-success">
                        <h1>Television Analyser</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis mollitia molestias, earum aliquam explicabo. Rem adipisci quas omnis ex.</p>
                        <button className='btn btn-info'>Live Demo</button>
                    </div>
                    <div className="col col-md-4 border border-success">
                        <img className='img-fluid' src={logo} alt="sonyTv" />
                    </div>
                </div>

            </section>
            <div className="container">
                <h1 className='text-center'>Customer reviews</h1>
                <div className="row">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='btn btn-info'>See all reviews</button >
            </div>
        </>
    );
};

export default Home;