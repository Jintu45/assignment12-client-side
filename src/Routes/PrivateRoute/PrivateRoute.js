import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-center my-8'><progress className="progress w-56"></progress></div>
    }
    if(!user){ 
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    return children;
}

export default PrivateRoute;