import React from 'react';

import doctor from '../../assets/images/doctor.png';
import bg from '../../assets/images/appointment.png';
const HomeAppointment = () => {
    return (
        <section style={{backgroundImage:` url(${bg})`}} className='flex p-10 justify-center items-center my-16'>
            <div className="flex-1 hidden lg:block">
                <img className='object-cover mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className="text-left flex-1 text-white">
                <h3 className="text-primary text-xl font-bold py-3">Appointment</h3>
                <h2 className="text-3xl font-bold py-3">Make an appointment Today</h2>
                <p className="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, velit placeat. Modi rerum sunt voluptatem eum ad, totam eaque quo reprehenderit ratione eos corrupti sapiente fuga nam quod? Itaque, eaque!</p>
                <button className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white">Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppointment;