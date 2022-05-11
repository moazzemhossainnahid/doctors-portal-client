import React, {useState} from 'react';
import APBanner from './APBanner';
import AVAppointments from './AVAppointments';

const Appointment = () => {
    const [date , setDate] = useState(new Date());
    return (
        <div>
            <APBanner date={date} setDate= {setDate}/>
            <AVAppointments date={date}/>
        </div>
    );
};

export default Appointment;