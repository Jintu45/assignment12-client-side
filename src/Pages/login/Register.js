import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
   

    const handleRegister = event => {
        event.preventDefault()
        const verify = "null";
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
      
        createUser(email, password)

        .then(result => {
            const user = result.user;
            saveUser(name, email, role, verify)
            form.reset()
            navigate(from, {replace: true})
            console.log(user)
        })

        .catch(error => alert(error))


        const saveUser = (name,email,role, verify) =>  {
            console.log(name,email,role,'saveuser')
            const user = {name,email,role, verify};
            fetch(`https://assignment12-server-two.vercel.app/users`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(userData => {
            if(userData.acknowledged){
                console.log(userData)
                toast.success('user create successful')
            }
            })
        }
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            alert(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            
            <div className="card w-96 shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold text-center mt-3'>Registration</h2>
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <label > Select account type buyer or seller </label>
                    <select   className="mt-3 select select-primary w-full max-w-xs" name='role' >
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
        
                    </select>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </form>

                <div className='text-center mb-5'>
                    <Link>
                        <button onClick={handleGoogleLogin} className='border-transparent rounded-xl py-2 px-8 bg-stone-500 text-white'>continue with google</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;