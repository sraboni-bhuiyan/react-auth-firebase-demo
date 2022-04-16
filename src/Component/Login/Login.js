import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Login = () => {

    const [login, setLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [userInfo, setUserInfo] = useState({
            email:'',
            password: '',
            confirmPassword: ''
    })
    

    const [
        createUserWithEmailAndPassword,
        createUser,
        createloading,
        createError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [loginUser, loginLoading, loginError] = useAuthState(auth);

    const handleFormInput = (event)=>{
        userInfo[event.target.name] = event.target.value;
        console.log(userInfo);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        if(!login){
            if(userInfo.password !== userInfo.confirmPassword){
                setErrorMessage('password does not match')
                return;
            }
            setErrorMessage('');
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else{
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }



        console.log(userInfo.password.value, userInfo.confirmPassword);
        console.log(userInfo);
    }

    let navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";

    if(loginUser){
        navigate(from, {replace: true})
    }

    return (
        <div className='container'>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <h2 className='text-center'>
                    {login ? 'Login' : 'Register'}
                </h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                </div>
                
                {
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={(event)=>handleFormInput(event)} type="password" name='confirmPassword' className="form-control" id="exampleInputPassword2"/>
                    </div>
                }

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=>setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">If you have an account, check here!</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                <p className='text-danger'>{errorMessage}</p>
                {
                    createError && <p className='text-danger'>{createError.message}</p>
                }
                {
                    createUser && <p className='text-success'>user created successfully</p>
                }
                {
                    user && <p className='text-success'>User Logged in successfully</p>
                }
            </form>
        </div>
    );
};

export default Login;