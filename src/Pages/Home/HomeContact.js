import React from 'react';

import image from '../../assets/images/appointment.png';
const HomeContact = () => {
    return (
        <div className='py-10 text-white' style={{background: `url(${image})`}}>
            <h3 className="text-secondary text-2xl">Contact Us</h3>
            <h2 className="font-bold text-4xl">Stay connected with us</h2>
            <form action="" className="flex flex-col justify-center items-center gap-3 py-10">
            <input type="text" placeholder="Email Address" className="input block input-bordered input-warning w-full max-w-xs" />
            <input type="text" placeholder="Subject" className="input block input-bordered input-warning w-full max-w-xs" />
            <textarea name="" id="" cols="30" rows="20" placeholder='Your Messege' className='input block input-bordered input-warning w-full h-24 max-w-xs resize-none'></textarea>
            <button className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white">Submit</button>

            </form>
        </div>
    );
};

export default HomeContact;