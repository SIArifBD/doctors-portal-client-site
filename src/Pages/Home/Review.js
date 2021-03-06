import React from 'react';

const Review = ({ review }) => {
    const { name, img, comment, city } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
            </div>
            <div className='flex items-center my-3'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{name}</h4>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;