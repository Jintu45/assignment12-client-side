import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Myproduct = () => {
    const {user} = useContext(AuthContext)
    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`)
            const data = res.json()
            return data;
        }
    })
    return (
        <div>
            <h2>products {products.length}</h2>
        </div>
    );
};

export default Myproduct;