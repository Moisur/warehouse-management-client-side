import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [Menu, setMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const Menubar = () => {
        setMenu(!Menu)
    }
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div  className={`${useLocation().pathname.toString() ==='/login'?'hidden':'block'} px-5 lg:px-14 flex items-center  z-8  justify-between font-mono text-lg text-[#434141] sticky top-0 ${navbar ? 'SimpleStyle' : 'hiStyle'}`}>
            <Link to='/'> <img className='w-20 ' src={require('../../images/logo.png')} alt="" /></Link>
            <nav className='hidden md:block'>
                <ul>
                    <Link className='px-4  py-1 rounded' to='/home'>Home</Link>
                    <Link className='py-1 rounded px-4' to='/blog'>Blog</Link>
                    <Link className='py-1 rounded px-4' to='/addItems'>Add Items</Link>
                    <Link className='py-1 rounded px-4' to='/myItems'>My Items</Link>
                    <Link className='py-1 rounded px-10' to='/login'>Login</Link>
                </ul>
            </nav>
            {
                Menu ? <nav>
                    <ul className='md:hidden absolute md:p-0 left-[-2px] top-0    text-center  bg-slate-400 md:w-0 w-full text-white h-[100vh] z-10'>
                        <div className='my-10'>
                            <Link className='py-1 rounded px-5' to='/home'>Home</Link>
                        </div>
                        <div className='my-10'>
                            <Link className='py-1 rounded px-5' to='/blog'>Blog</Link>
                        </div>
                        <div className='my-10'>
                            <Link className='py-1 rounded px-5' to='/addItems'>Add Items</Link>
                        </div>
                        <div className='my-10'>
                            <Link className='py-1 rounded px-5' to='/myItems'>My Items</Link>
                        </div>
                        <div className='my-10'>
                            <Link className='py-1 rounded px-5' to='/login'>Login</Link>
                        </div>

                    </ul>
                </nav> :
                    ''
            }
            <div onClick={Menubar} className='md:hidden block text-3xl z-10'>
                {
                    Menu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                }

            </div>

        </div>
    );

};

export default Navbar;