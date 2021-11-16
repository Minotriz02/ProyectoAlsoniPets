import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarSystem = function ({ cal }) {
    return (
        <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span>❤</span>}
            starCount="5"
            emptyStarColor="#ffffff"
            value={cal}
        />
    );
}


export default StarSystem;
