import React from 'react';
import './Review.css';

const Review = (props) => {
    //console.log(props.review);
    const { name, review, rating } = props.review;
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{review}</p>
                    <p className="card-text">{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;