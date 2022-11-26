import React, { useState } from 'react';



const ProductsItem = ({product, setProduct}) => {
    const {title, photoURL, brand, originalPrice, reselPrice,
        yearsOfUse, sellerLocation, memory} = product;
    return (
        <div className='shadow-2xl p-10 text-center'>
            <img className='h-80 w-auto' src={photoURL} alt="" />
            <p className='text-xl font-semibold mt-4 text-orange-600'>{brand}</p>
            <h2 className='my-2 text-lg'>Model: {title}</h2>
            <div className=' font-semibold'>
                <p>Original Price: {originalPrice}</p>
                <p>Resale Price: {reselPrice}</p>
                <p>memory: {memory}</p>
            </div>
            <div className='flex justify-between mt-2 mb-3'>
                <h3>loc: {sellerLocation}</h3>
                <p>use: {yearsOfUse}</p>
            </div>
            <label htmlFor="my-modal-3"
               onClick={()=>setProduct(product)}
              className="btn btn-primary">Book Now</label>

        </div>
    );
};

export default ProductsItem;