import React from 'react';
import './Review.css';
import '../Home/Home.css';

const Review = (props) => {
    //console.log(props.review);
    const { name, review, rating, picture } = props.review;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 card-style my-3">
            <div className="card p-4">
                <div className="row align-items-center justify-content-center p-0 m-0">
                    <div className="col-4 text-center ">
                        <img src={picture} alt="profile" className='img-style' style={{ width: '4rem' }} />
                    </div>
                    <div className="col-8">
                        <h6 className="card-title text-style fw-bolder">{name}</h6>
                    </div>
                </div>
                <hr className='text-style' />
                <div className='review-style'>
                    <p className="card-text"><span className='fw-bold text-style'>Review:</span> {review}</p>
                </div>
                <hr className='text-style' />
                <p className="card-text"><span className='fw-bold text-style'>Rating:</span> {rating}</p>
            </div>
        </div>
    );
};

export default Review;