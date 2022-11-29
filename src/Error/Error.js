import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css'
const Error = () => {
    const errors = useRouteError()
    return (
        <div className='error'>
            <h1 className='text-orange-500 font-bold text-3xl'>404</h1>
            <h2 className='text-2xl font-semibold text-stone-700'>unexpected error</h2>
            <p className='text-lg mt-2'>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default Error;