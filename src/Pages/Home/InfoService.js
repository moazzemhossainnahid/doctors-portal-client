import React from 'react';

const InfoService = ({service}) => {
    const {image, title, desc} = service;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
            </div>
        </div>
    );
};

export default InfoService;