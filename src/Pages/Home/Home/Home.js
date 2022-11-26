import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Category></Category>
        </div>
    );
};

export default Home;