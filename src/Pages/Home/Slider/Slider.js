import React from 'react';
import slider1 from '../../../assets/slider/slider1.jpg'
import slider3 from '../../../assets/slider/slider3.jpg'
import slider4 from '../../../assets/slider/slider4.jpg'
import slider5 from '../../../assets/slider/slider5.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <div>
        <h1 className='text-4xl font-bold text-center my-10'>Resale Phones </h1>
         <div className="carousel w-full">
                <div id="slide1" className="carousel-item  relative w-full">
                        <img alt='' src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform         -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                        <img alt='' src={slider5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src={slider4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
        </div>
       </div>
    );
};

export default Slider;