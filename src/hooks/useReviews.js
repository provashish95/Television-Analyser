import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews-data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return [reviews, setReviews];
};

export default useReviews;