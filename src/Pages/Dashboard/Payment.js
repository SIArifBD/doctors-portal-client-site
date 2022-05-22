import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L29yQIfpiubdjV3kQlZxh9XCTgGSnDvs8bF9obyljfT18eHyvguwOl3E8O8vNl8fwQXElFH2zS9z6oC34YrP1xd00wCjPXsTV');

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-server-site.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName} </p>
                    <h2 className="card-title">Pay for: {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;