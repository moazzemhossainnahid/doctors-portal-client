
import React from 'react';

import quote from '../../assets/icons/quote.svg';
import InfoTestimonal from './InfoTestimonal';
import image1 from '../../assets/images/people1.png';
import image2 from '../../assets/images/people1.png';
import image3 from '../../assets/images/people1.png';
const Testimonials = () => {
    const quotes = [
        {
            image:`${image1}`, title: "Winson Herry", country: 'California', desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            image:`${image2}`, title: "Winson Herry", country: 'California', desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            image:`${image3}`, title: "Winson Herry", country: 'California', desc:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <section className='p-10'>
            <div className="flex justify-between items-center">
            <div className="text-left">
                <h3 className="text-xl text-secondary font-bold py-5">Testimonial</h3>
                <h2 className="text-4xl">What Our Patients Says</h2>
            </div>
            <div className="">
                <img src={quote} alt="" className="w-32" />
            </div>
            </div>

            <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 container mx-auto py-16">
                {
                    quotes.map(quote => <InfoTestimonal quote = {quote}/>)
                }
            </div>
        </section>
    );
};

export default Testimonials;