import React from 'react';

import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {

    const info = [
        {
            image:`${Clock}`, title: "Opening Hours", desc: "Lorem Ipsum is simply dummy ", bgClass:" bg-gradient-to-r from-secondary to-primary"
        },
        {
            image:`${Marker}`, title: "Visit our location", desc: "Brooklyn, NY 10036, United States", bgClass:"bg-accent"
        },
        {
            image:`${Phone}`, title: "Contact us now", desc: "+000 123 456789", bgClass:" bg-gradient-to-r from-secondary to-primary"
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 py-10'>
            {
                info.map(i => <InfoCard info={i}/>)
            }
        </div>
    );
};

export default Info;