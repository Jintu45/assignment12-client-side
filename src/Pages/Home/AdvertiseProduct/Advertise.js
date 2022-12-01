import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = ({adver}) => {
    const {name, price, image, category_id} = adver
    return (
        <div className='text-center shadow-2xl p-10'>
           <img className='h-80 w-auto' src={image} alt="" />
           <h2 className='text-xl text-orange-500 font-semibold'>{name}</h2>
           <h2 className=' text-violet-600 font-semibold'>{price}</h2>
           {/* <Link to={`/categories/${category_id}`}>
           <button className='btn btn-primary mt-5'>All category</button>
           </Link> */}
           <Link to={`/categories/${category_id}`}>
           <button className='btn btn-primary mt-5'>All category</button>
           </Link>
        </div>
    );
};

export default Advertise;