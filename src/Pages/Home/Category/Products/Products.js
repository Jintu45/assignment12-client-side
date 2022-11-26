import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookModal/BookModal';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [product, setProduct] = useState(null)
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-16'>
            {
                products.map(product => <ProductsItem
                    key={product._id}
                    product={product}
                    setProduct={setProduct}
                ></ProductsItem>)
            }
            {
                product && 
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;