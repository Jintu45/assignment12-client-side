import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {brand, photoURL, title, category_id} = category;
    return (
        <div className='text-center shadow-2xl p-10'>
           <img className='h-80 w-auto' src={photoURL} alt="" />
           <h2 className='text-xl text-orange-500 font-semibold'>{title}</h2>
           <h2 className=' text-violet-600 font-semibold'>{brand}</h2>
           <Link to={`/categories/${category_id}`}>
           <button className='btn btn-primary mt-5'>All category</button>
           </Link>
        </div>
    );
};

export default CategoryItem;