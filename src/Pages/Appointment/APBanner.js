import React from 'react';

import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const APBanner = ({date , setDate}) => {

    return (
        <div style={{background: `url(${bg})`}}>
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='p-5'>
                <DayPicker mode="single" selected={date} onSelect={setDate}/>
                {/* <p className="">You Have Selected: {format(date, 'PP')}</p> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default APBanner;