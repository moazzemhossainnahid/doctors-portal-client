import React from 'react';

const InfoCard = ({info}) => {
    const {image, title, desc, bgClass} = info;
    return (
        <div className=''>
            <div className={`card lg:card-side items-center text-white text-left p-3 shadow-xl ${bgClass}`}>
            <figure><img src={image} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className=''>{desc}</p>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;