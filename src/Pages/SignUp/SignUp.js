
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setcreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();
    // if (token) {
    //     navigate('/');
    // }
    const handleSignUp = (data) => {
        setSignUpError('');
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast('user created successfully');
        //         const userInfo = {
        //             displayName: data.name
        //         }
        //         updateUser(userInfo)
        //             .then(() => {
        //                 saveUser(data.name, data.email);
        //             })
        //             .catch(err => console.error(err))
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setSignUpError(error.message)
        //     })

    }
    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('saveuser', data);
    //             setcreatedUserEmail(email);
    //         })
    // }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <TextField type='text'
                            variant='filled'
                            {...register('name', {
                                required: 'name is required'
                            })}
                            className="input input-bordered w-full max-w-xs mb-4" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <TextField type='text'
                            variant='filled'
                            {...register('email', {
                                required: 'email is required'
                            })}
                            className="input input-bordered w-full max-w-xs mb-4" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <TextField type='password'
                            variant='filled'
                            {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must ber 6 charecter or more' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must have uppercase, number and special charecters' }
                            })}
                            className="input input-bordered w-full max-w-xs mb-4" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <Button variant='contained'>Sign Up</Button>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please login</Link></p>
                <div className="divider">OR</div>
                <Button variant='outlined'>CONTINUE WITH GOOGLE</Button>
            </div>
        </div>
    );
};

export default SignUp;