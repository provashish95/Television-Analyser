import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import '../Home/Home.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="container">
            <h4 className='text-center fw-bold title-style mt-5'>Customer reviews</h4>
            <div className="row">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;