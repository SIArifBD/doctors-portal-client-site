import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import merker from '../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" pera="Lorem Ipsum is simply dummy text of the pri" cardTitle="Openning Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-[#3A4256]" pera="Brooklyn, NY 10036, United States" cardTitle="Visit Our Location" img={merker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" pera="+000 123 456789" cardTitle="Contact Us Now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;