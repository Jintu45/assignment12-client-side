import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        fetch('https://assignment12-server-two.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-12'>
            {
                categories?.map(category => <CategoryItem
                    key={category._id}
                    category ={category}
                ></CategoryItem>)
            }
        </div>
    );
};

export default Category;