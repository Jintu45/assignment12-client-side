import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyOrder from '../MyOrder/MyOrder';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?.email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(orders)
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                {
                        orders?.map((order, i) => <tr
                            key={user._id}
                        >
                            <th>{i+1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={order.photo} alt='' />
                                    </div>
                                </div>
                            </td>
                            <td>{order?.Name}</td>
                            <td>{order?.Price}</td>
                            <td><button className="btn btn-sm text-sm bg-primary">Pay</button></td>
                            <td><button className="btn btn-sm text-sm bg-red-500">Delete</button></td>
                        </tr>)
                    }
          </tbody>
        </table>
      </div>
    );
};

export default Dashboard;