import React, { useEffect, useState } from 'react';
import Title from '../../shared/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../shared/Spinner/Spinner';
import { toast } from 'react-toastify';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [password, setPassword] = useState(false)
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const from = location.state?.from?.pathname || "/";
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
            setHandelError('6 Digit Password')
            setHandel('')
        }
    }
    /* ====================== SignIn ===================  */
    // user?.emailVerified
    const SignIn = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = handel;
        if (handel) {
            signInWithEmailAndPassword(email, password)

        } else {
            toast.error("error password")
            return;
        }
    }
    /* ========================== ForgetPassword ====================== */
    const [ForgetEmail, setForgetEmail] = useState('')
    const emailHandel = (event) => {
        const email = event.target.value
        setForgetEmail(email)
    }
    const ForgetPassword = async () => {
        await sendPasswordResetEmail(ForgetEmail)
    }
    
    useEffect(() => {
        if (errorReset) {
            toast.error("Not Verify email")
        }
        if (sending) {
            console.log(sending)
            toast.success("Email  Sent Code")
        }
    })

    if (userGoogle || userGithub || user) {
        navigate(from, { replace: true });
        toast.success("Login success")
    }
    if (loadingGoogle || loadingGithub || loading) {
        return <Spinner></Spinner>
    }

    if (errorGoogle || errorGithub || error) {
        toast.error("SingUP Error")
    }
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
                        <form onSubmit={SignIn} className='text-black'>
                            <div className='mb-3'>
                                <span>
                                    <label htmlFor="Email">Enter Your Email</label>
                                </span>
                                <br />
                                <input onChange={emailHandel} className='w-full border-b-2 outline-none  p-1 ' name='email' type="email" id='Email' placeholder='You email..' required />
                            </div>
                            <div className='mb-4'>
                                <span>
                                    <label htmlFor="password">Enter Your Password</label>
                                    <span className='cursor-pointer ml-[25px] md:ml-[225px]' onClick={() => setPassword(!password)}>{
                                        password ? <span> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Show</span> :
                                            <span> <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> Hide</span>
                                    }
                                    </span>
                                </span>
                                <br />
                                <input onChange={passwordHandel} className='w-full  outline-none border-b-2  p-1' type={password ? 'password' : 'text'} id='password' placeholder='You password..' required />
                                <span className='text-[#eb1b1bec]'>{handelError}</span>
                            </div>
                            <div className='mb-2'>
                                <input className='w-full rounded-md outline-none  bg-[#eb1b1bec] hover:bg-[#d83737] text-white  p-1 cursor-pointer' type="submit" value='Login' />
                            </div>
                            <div className='flex justify-between items-center mb-2 '>
                                <p onClick={ForgetPassword} className='hover:text-[#eb1b1bec] cursor-pointer'>Forget Password..?</p>
                                <Link className='hover:text-[#eb1b1bec]' to='/register'>Register</Link>
                            </div>
                            <div onClick={() => signInWithGoogle()} className='flex justify-around items-center btn-login my-5 p-1 rounded-md cursor-pointer'>
                                <img className='w-8' src={require('../../images/google.png')} alt="" />
                                <p>Google Sing With</p>
                            </div>
                            <div onClick={() => signInWithGithub()} className='flex justify-around items-center btn-login p-1 rounded-md cursor-pointer'>
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