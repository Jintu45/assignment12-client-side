import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset()
            navigate(from, {replace: true})
          
        })
        .catch(error => alert(error))
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
           
        })
        .catch(error => {
            alert(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            
            <div className="card w-96 shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>

                <div className='text-center mb-5'>
                    <Link>
                        <button onClick={handleGoogleLogin} className='border-transparent rounded-xl py-2 px-8 bg-stone-500 text-white'>continue with google</button>
                    </Link>

                    <p className='mt-4 '>Create new account please <Link className='text-blue-500 border-b-blue-500 font-bold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;