import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <p>{slots.length ? slots[0] : "No Slot Available"}</p>
                <p className="uppercase">{slots.length} Spaces Available</p>
                <div className="card-actions justify-center">
                <label for="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn bg-secondary text-white uppercase">Book Appointment</label>
                {/* <button for="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn bg-secondary text-white uppercase">Book Appointment</button> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;