import React, { useState } from 'react';
import Title from '../../shared/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import Spinner from '../../shared/Spinner/Spinner';
const Register = () => {
    const [password, setPassword] = useState(false)
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
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

    /* ============================= Register ========================  */
     const Register =async (event)=>{
        event.preventDefault()
        const displayName = event.target.Names.value;
        const email = event.target.email.value;
        const password = handel;
        const photoURL = event.target.images.value;
        if(handel){
           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName, photoURL });
        }
        else{
            return;
        }
     }
     if (userGoogle || userGithub || user) {
        toast.success("Register success")
        navigate('/')
    }
    if (loadingGoogle || loadingGithub || loading) {
        return <Spinner></Spinner>
    }

    if (errorGoogle || errorGithub || error) {
        toast.error("Account-exists")
        navigate('/')
    }

    return (
        <div>
            <Title title={Register}></Title>
            <div className='w-[280px] md:w-[520px] mx-auto mt-10 btn-login p-4 md:p-10  rounded-3xl shadow-2xl'>
                        <h1 className='text-4xl font-mono font-bold py-4'>Register</h1>
                        <form onSubmit={Register}  className='text-black'>
                            <div className='mb-3'>
                                <span>
                                    <label htmlFor="Names">User Names</label>
                                </span>
                                <br />
                                <input className='w-full border-b-2 outline-none  p-1 ' name='Names' type="text" id='Names' placeholder='User Names..' required />
                            </div>
                            <div className='mb-3'>
                                <span>
                                    <label htmlFor="Email">Enter Your Email</label>
                                </span>
                                <br />
                                <input className='w-full border-b-2 outline-none  p-1 ' name='email' type="email" id='Email' placeholder='You Verify email..' required />
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
                                <input onChange={passwordHandel}  className='w-full  outline-none border-b-2  p-1' type={password ? 'password' : 'text'} id='password' placeholder='You password..' required />
                                <span className='text-[#eb1b1bec]'>{handelError}</span>
                            </div>
                            <div className='mb-3'>
                                <span>
                                    <label htmlFor="images">Your URL</label>
                                </span>
                                <br />
                                <input className='w-full border-b-2 outline-none  p-1 ' name='images' type="text" id='images' placeholder='Your URL..' required />
                            </div>
                            <div className='mb-2'>
                                <input className='w-full rounded-md outline-none  bg-[#eb1b1bec] hover:bg-[#d83737] text-white  p-1 cursor-pointer' type="submit" value='Register' />
                            </div>
                            <div className='flex justify-between items-center mb-2 '>
                                <button></button>
                                <Link className='hover:text-[#eb1b1bec]' to='/login'>Login</Link>
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
    );
};

export default Register;