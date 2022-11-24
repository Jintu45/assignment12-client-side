import React from 'react';
import banner from '../../../assets/banner/banner'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <article
                className='article py-40'
                style={{ backgroundImage: `url(${banner})` }}
                >
                <h1 className='text-5xl text-center font-bold h1-text text-stone-300'>Welcome to <br /> Our Phone Resale Website</h1>
            </article>
        </div>
    );
};

export default Banner;