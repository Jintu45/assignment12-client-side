import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertise from './Advertise';

const AdvertiseProduct = () => {
    const [advertise, setAdvertise] = useState([])
    useEffect(() => {
        fetch('https://assignment12-server-two.vercel.app/advertised')
        .then(res => res.json())
        .then(data => setAdvertise(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-12'>
            {
                advertise.map(adver => <Advertise 
                    key={adver._id}
                    adver={adver}
                ></Advertise>)
            }
        </div>
    );
};

export default AdvertiseProduct;