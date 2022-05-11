import React from 'react';


import service1 from '../../assets/images/fluoride.png';
import service2 from '../../assets/images/cavity.png';
import service3 from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import InfoService from './InfoService';
const Service = () => {

    const services = [
        {
            image: `${service1}`, title: 'Fluoride Treatment', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: `${service2}`, title: 'Cavity Filling', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: `${service3}`, title: 'Teeth Whitening', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-26'>
            <h3 className="font-bold text-secondary uppercase text-xl">Our Services</h3>
            <h3 className="font-bold text-accent uppercase text-2xl py-3">Services We Provide</h3>

            <div className="grid gird-cols-1 lg:grid-cols-3 container mx-auto my-10 gap-3">
                {
                    services.map(service => <InfoService service = {service}/>)
                }
            </div>

            <div className="hero min-h-screen bg-white container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className=' text-left pl-10'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;