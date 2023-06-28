import React from 'react';

const ReviewWithStars = ({ stars }) => {
  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const halfStar = stars - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<i className="fas fa-star" key={i}></i>);
    }

    if (halfStar) {
      starElements.push(<i className="fas fa-star-half-alt" key="half"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<i className="far fa-star" key={`empty-${i}`}></i>);
    }

    return starElements;
  };

  return <div>{renderStars()}</div>;
};

export default ReviewWithStars;