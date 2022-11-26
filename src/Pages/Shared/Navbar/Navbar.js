import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user, signUp} = useContext(AuthContext);
    
   const handleLogOut = event => {
    signUp()
    .then(() => {})
    .catch(error => console.log(error))
   }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/'>Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/mydetails">My Details</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li> 
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Phone resale</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/mydetails">My Details</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>                   
                </ul>
            </div>
            <div className="navbar-end">
                    {
                        user?.email ? 
                       <> 
                            <button onClick={handleLogOut} className='btn btn-dark py-2 px-6'>LogOut</button>
                       </>
                        :
                        <>
                        <Link to='/login'>
                            <button className='btn btn-primary py-2 px-6 mr-4'>Log In</button>
                        </Link>
                        <Link to='/register'>
                            <button className='btn btn-info py-2 px-6'>Register</button>
                        </Link>
                        </>
                    }
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
        </div>
    );
};

export default Navbar;