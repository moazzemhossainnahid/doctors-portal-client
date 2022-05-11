import React from 'react';


const InfoTestimonal = ({quote}) => {
    const {image, title, country, desc} = quote;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className=" py-3">
            <p>{desc}</p>
            </div>
            <div className="flex justify-around items-center py-5">
                <div className="">
                <img src={image} alt="" className="border-secondary border border-4 rounded-full" />
                </div>
                <div className="text-left">
                    <p className="card-title">{title}</p>
                    <p className="">{country}</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default InfoTestimonal;