import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;


    const handleBooking =(event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(slot);

        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg text-secondary">Booking For : {name}</h3>
                <form onSubmit={handleBooking} className="mt-3">
                <input type="text" value={format(date, "PP")} disabled className="input input-bordered w-full my-1 max-w-xs" />
                <select name='slot' className="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option selected value={slot}>{slot}</option>)
                }
                </select>
                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full my-1 max-w-xs" />
                <input type="text" name='email' placeholder="Email Address" className="input input-bordered w-full my-1 max-w-xs" />
                <input type="text" name='phone' placeholder="Enter Phone" className="input input-bordered w-full my-1 max-w-xs" />
                <input type="submit" className="btn btn-secondary block mx-auto px-10 mt-2" value="Submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;