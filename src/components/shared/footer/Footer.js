import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const Location =useLocation()
    const path = Location.pathname
    return (
        <footer style={path.includes('/login')?{display:'none'}:path.includes('/register')?{display:'none'}:{display:'block'}} className="p-4 bg-zinc-100 sm:p-6">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={require('../../images/logo.png')} className="mr-3 w-14" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Car  management</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                        <ul className="text-gray-600 ">
                            <li className="mb-4">
                                <a href="https://flowbite.com" className="hover:underline">Car  management</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                        <ul className="text-gray-600 ">
                            <li className="mb-4">
                                <a href="https://github.com/Moisur" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/stories/create" className="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                        <ul className="text-gray-600 ">
                            <li className="mb-4">
                                <p>Privacy Policy</p>
                            </li>
                            <li>
                                <p>Terms &amp; Conditions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© 2022 <Link to="/" className="hover:underline">Car  management</Link>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href='https://web.facebook.com/stories/create'>
                        <img className='w-10' src={require('../../images/Footer/logo-facebookpng-32247.png')} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/feed/'>
                        <img className='w-10' src={require('../../images/Footer/linkedin.png')} alt="" />
                    </a>
                    <a href='https://github.com/Moisur'>
                        <img className='w-10' src={require('../../images/github-logo.png')} alt="" />
                    </a>
                    <a href='https://www.google.com/'>
                        <img className='w-10' src={require('../../images/google.png')} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;