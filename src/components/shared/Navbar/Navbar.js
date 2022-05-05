import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'
import CustomLink from '../../../CustomLink';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState(false)
    const [Menu, setMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [mode, setMode] = useState(false)
    const Navigate=useNavigate()

    const Menubar = () => {
        setMenu(!Menu)
    }
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
            setProfile(false)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    /* ======================= Logout ==================  */
    const Logout=()=>{
        signOut(auth)
        Navigate('/')
        toast.success('Logout success')
        setProfile(false)
    }
    const Location =useLocation()
    const path = Location.pathname
    return (
        <div className={`${path.includes('/login')? 'hidden':'block'} px-5 lg:px-14 flex items-center    justify-between  text-lg text-[#434141] sticky top-0 z-40 ${navbar ? 'SimpleStyle' : 'hiStyle'}`}>
            <Link to='/'> <img className='w-20 ' src={require('../../images/logo.png')} alt="" /></Link>
            <nav className='hidden md:block font-mono'>
                <ul className='flex items-center'>
                    <CustomLink to='/home' onClick={() => setProfile()} className='px-4  py-1 ' >Home</CustomLink>
                    <CustomLink to='/blog' onClick={() => setProfile()} className='py-1  px-3' >Blogs</CustomLink>
                    {
                        user ? <CustomLink to='/addItems' onClick={() => setProfile()} className='py-1  px-3' >Add Items</CustomLink> : ''
                    }
                    {
                        user ? <CustomLink to='/myItems' onClick={() => setProfile()} className='py-1  px-3' >My Items</CustomLink> : ''
                    }
                    {
                        user ? <div onClick={() => setProfile(!profile)} className='cursor-pointer px-14'>
                            <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        </div> : <CustomLink className='py-1   px-14' to='/login'>Login</CustomLink>
                    }

                </ul>
            </nav>
            {
                Menu ? <nav>
                    <ul className='md:hidden absolute md:p-0 left-[-2px] top-0  font-mono   text-center  bg-slate-400 md:w-0 w-full text-white h-[100vh] z-10'>
                        <div className='my-10'>
                            <CustomLink onClick={() => setProfile()} className='py-1  px-5' to='/home'>Home</CustomLink>
                        </div>
                        <div className='my-10'>
                            <CustomLink onClick={() => setProfile()} className='py-1  px-5' to='/blog'>Blogs</CustomLink>
                        </div>
                        {
                            user ? <div className='my-10'>
                                <CustomLink onClick={() => setProfile()} className='py-1  px-5' to='/addItems'>Add Items</CustomLink>
                            </div> : ''
                        }
                        {
                            user ? <div className='my-10'>
                                <CustomLink onClick={() => setProfile()} className='py-1  px-5' to='/myItems'>My Items</CustomLink>
                            </div> : ''
                        }
                        {
                            user ? <div onClick={() => setProfile(!profile)} className='cursor-pointer'>
                                <img className='w-10 rounded-full mx-auto' src={user?.photoURL} alt="" />
                            </div> : <div className='my-10'>
                                <CustomLink className='py-1  px-7' to='/login'>Login</CustomLink>
                            </div>
                        }

                    </ul>
                </nav> :
                    ''
            }
            <div onClick={Menubar} className='md:hidden block text-3xl z-10'>
                {
                    Menu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                }

            </div>
            <div className='absolute top-20 right-16 rounded border-2 '>
                {
                    profile ? <div className='w-[250px] bg-white shadow-xl p-5 text-center '>
                        <div className='w-10 mx-auto'>
                            <img className='w-full rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        <h1 className=' py-2'>{user?.displayName}</h1>
                        <div className='flex justify-evenly items-center cursor-pointer' onClick={() => setMode(!mode)}>
                            <span>Dark mode</span>
                            {

                                mode ? <img className='w-6 rounded-full' src={require('../../images/darkmode.png')} alt="" /> : <img className='w-6 rounded-full' src={require('../../images/lightmode.png')} alt="" />

                            }
                        </div>
                        <h1 onClick={Logout} className=' py-2 cursor-pointer'>Logout</h1>
                    </div> : ''
                }
            </div>
           
        </div>
    );

};

export default Navbar;