import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Myproduct = () => {
    const {user} = useContext(AuthContext)
    const {data: products = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`https://assignment12-server-two.vercel.app/products/${user?.email}`)
            const data = res.json()
            return data;
        }
    })

   
    const handleDelete = id => {
        fetch(`https://assignment12-server-two.vercel.app/products/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('deleted successfully')
                refetch()
            }
        })
    }
    const handleAdvertise = id => {
        fetch(`https://assignment12-server-two.vercel.app/advertiseProducts/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
         
            if(data.modifiedCount > 0){
                toast.success('advertise successfully')
               
            }
        })
    }

     return (
        <div>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Number</th>
              <th>Status</th>
              <th>Advetiser</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                {
                        products?.map((product, i) => <tr
                            key={product._id}
                        >
                            <th>{i+1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div>
                            </td>
                            <td>{product?.name}</td>
                            <td>{product?.price}</td>
                            <td>{product?.location}</td>
                            <td>{product?.number}</td>
                            <td>{product?.status}</td>
                            <td><button onClick={() => handleAdvertise(product._id)} className="btn btn-sm text-sm bg-primary">Advertise</button></td>
                            <td><button onClick={() => handleDelete(product._id)} className="btn btn-sm text-sm bg-red-500">Delete</button></td>
                        </tr>)
                    }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Myproduct;