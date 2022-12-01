import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`https://assignment12-server-two.vercel.app/users`)
            const data = res.json()
            return data;
        }
    })

    const handleUserDelete = email => {
        fetch(`https://assignment12-server-two.vercel.app/usersDelete/${email}`, {
            method: 'PUT', 

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('deleted successfully')
                refetch()
            }
        })
    }
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                {
                        users?.map((user, i) => <tr
                            key={user._id}
                        >
                            <th>{i+1}</th>
                            <td>
                                {user.name}
                            </td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button onClick={() => handleUserDelete(user?.email)} className="btn btn-sm text-sm bg-red-500">Delete</button></td>
                        </tr>)
                    }
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;