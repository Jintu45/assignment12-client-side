import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Category></Category>
            <AdvertiseProduct></AdvertiseProduct>
        </div>
    );
};

export default Home;