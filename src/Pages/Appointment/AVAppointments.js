import { format } from 'date-fns';
import React, {useState, useEffect} from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AVAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h3 className="text-secondary text-xl py-5">Available Appointments on {format(date, 'PP')}</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5">
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}/>}
        </div>
    );
};

export default AVAppointments;