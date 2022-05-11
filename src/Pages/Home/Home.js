import React from 'react';
import Footer from '../Shared Pages/Footer';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import HomeContact from './HomeContact';
import Info from './Info';
import Service from './Service';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <HomeAppointment/>
            <Testimonials/>
            <HomeContact/>
            <Footer/>
        </div>
    );
};

export default Home;