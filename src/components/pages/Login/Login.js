import React, { useState } from 'react';
import Title from '../../shared/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [password, setPassword] = useState(false)
    /* =================== password ===================  */
    const [handel, setHandel] = useState('')
    const [handelError, setHandelError] = useState('')
    const passwordHandel = (event) => {
        const password = event.target.value
        if (password.length > 6) {
            setHandel(event.target.value)
            setHandelError('')
        }
        else {
            setHandelError('RongPassword')
        }
    }
    console.log(handel)
    return (
        <div>
            <Title title={Login}></Title>
            <div className='px-5 lg:px-20 '>
                <div>
                    <div className='flex justify-between items-center text-2xl'>
                        <img className='w-20' src={require('../../images/logo.png')} alt="" />
                        <Link to='/'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></Link>
                    </div>
                    <div className='h-1 bg-[#eb1b1bec] w-full rounded-3xl'></div>
                    <div className='w-[280px] md:w-[520px] mx-auto mt-20 btn-login p-4 md:p-10  rounded-3xl shadow-2xl'>
                        <h1 className='text-4xl font-mono font-bold py-4'>Login</h1>
                        <form className='text-black'>
                            <div className='mb-3'>
                                <span>
                                    <label htmlFor="Email">Enter Your Email</label>
                                </span>
                                <br />
                                <input className='w-full border-b-2 outline-none  p-1 ' type="email" id='Email' placeholder='You email..' required />
                            </div>
                            <div className='mb-4'>
                                <span>
                                    <label htmlFor="password">Enter Your Password</label>
                                    <span className='cursor-pointer md:ml-48' onClick={() => setPassword(!password)}>{
                                        password ? <span> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Show</span> :
                                            <span> <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> Hide</span>
                                    }
                                    </span>
                                </span>
                                <br />
                                <input onChange={passwordHandel} className='w-full  outline-none border-b-2  p-1' type={password ? 'password' : 'text'} id='password' placeholder='You password..' required />
                                <span>{handelError}</span>
                            </div>
                            <div className='mb-2'>
                                <input className='w-full rounded-md outline-none  bg-[#eb1b1bec] text-white  p-1 cursor-pointer' type="submit" value='Login'/>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <button>Forget Password..?</button>
                                <Link to='/register'>Register</Link>
                            </div>
                            <div className='flex justify-around items-center btn-login my-5 p-1 rounded-md cursor-pointer'>
                                <img className='w-8' src={require('../../images/google.png')} alt="" />
                                <p>Google Sing With</p>
                            </div>
                            <div className='flex justify-around items-center btn-login p-1 rounded-md cursor-pointer'>
                                <img className='w-8' src={require('../../images/github-logo.png')} alt="" />
                                <p>Google Sing With</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;