import React, { useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState(false)

    const [userInfo, setUserInfo] = useState(
        {
            email:'',
            password: '',
            confirmPassword: ''
        })
    const handleFormInput = (event)=>{
        setUserInfo(event.target)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
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
                        <input onBlur={(event)=>handleFormInput(event)} type="password" name='confirmPassword' className="form-control" id="exampleInputPassword1"/>
                    </div>
                }

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=>setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">If you have an account, check here!</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
            </form>
        </div>
    );
};

export default Login;