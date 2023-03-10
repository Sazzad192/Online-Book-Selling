import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { signIn } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setloginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';
    // if (token) {
    //     navigate(from, { replace: true });
    // }
    const handleLogin = data => {
        console.log(data);
        // setLoginError('');
        // signIn(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         setloginUserEmail(data.email);
        //         //navigate(from, { replace: true });
        //     })
        //     .catch(err => {
        //         console.error(err.message);
        //         setLoginError(err.message);
        //     })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <TextField label=""
                            id="outlined-size-small"
                            variant='filled'
                            type='text'
                            {...register("email", { required: 'email is required' })}
                            className="input input-bordered w-full max-w-xs mb-4" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <TextField type='password'
                            variant='filled'
                            {...register("password", {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 charecters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs mb-4" />
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                        {/* <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label> */}
                    </div>

                    <Button variant='contained' >Login</Button>

                    {/* <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div> */}
                </form>
                <p>New Here? <Link className='text-secondary' to='/signup'>Create a new account</Link></p>
                <div className="divider">OR</div>
                <Button variant='outlined'>CONTINUE WITH GOOGLE</Button>
            </div>
        </div>
    );
};

export default Login;