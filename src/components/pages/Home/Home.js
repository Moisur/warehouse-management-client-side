import React, { } from 'react';
import Title from '../../shared/Title/Title';
import UserFetch from '../../shared/UserFetch/UserFetch';
import UserProduct from '../../shared/userProduct/UserProduct';
import svgIMages from '../../images/blob-svg.svg'
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [product] = UserFetch('https://rocky-tundra-02807.herokuapp.com/products')
    return (
        <div className='mb-20'>
            <Title title={Home}></Title>
            <div className='bgStyle md:h-[100%] mb-20  md:md-0'>
                <div className='lg:p-14 p-5 grid grid-cols-1 md:grid-cols-2  '>
                    <div className='relative p-5 mb-24 md:md-0'>
                        <div className='w-[270px]  h-[100%] py-5 mb-24 md:w-[40%] md:h-[50%] mx-auto colorImages opacity-75 animate-bounce'></div>
                        <div className='absolute top-0'>
                            <h1 className='text-4xl font-serif uppercase my-5 text-white'>Car inventory management</h1>
                            <p className='text-xl mb-14 text-slate-100'>What is a car description?
                                Vehicle Description means a description of a vehicle including at a minimum the license information, issuing state, make, model, year, color, body style, and vehicle identification number (VIN).</p>
                            <button className='flex justify-center items-center px-8 py-1 rounded-xl shadow-lg bg-[#FF0066] text-white  font-bold'>
                                <span className='text-xl uppercase mr-3'>Car management</span>
                                <img className='w-8' src={require('../../images/arrow-56-xxl.png')} alt="" />
                            </button>
                        </div>

                    </div>
                    <div className='py-32 mt-20 md:mt-0 md:py-0'>
                        <img className='w-[400px] mx-auto animate-pulse' src={svgIMages} alt="" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,192C320,171,400,117,480,90.7C560,64,640,64,720,69.3C800,75,880,85,960,112C1040,139,1120,181,1200,170.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            </div>
            <h1 className='text-center text-4xl font-serif font-bold my-20 text-[#2193b0]'>Car inventory management</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:px-20 mb-10'>

                {
                    product.map(pd => <UserProduct
                        key={pd._id}
                        pd={pd}
                    >Update button</UserProduct>)
                }
            </div>
            <Link className='' to='/manages'>
                <h1 className=' w-[300px] mx-auto  bg-[#FF0066] rounded-lg shadow-xl  mt-14 mb-10 text-3xl px-3 py-1 text-white font-serif font-bold'>Manages Items</h1>
            </Link>
            <h1 className='text-center text-4xl font-serif font-bold my-20 text-[#2193b0]'>2022 Product </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 text-center md:px-20 '>
                <div className='shadow-2xl border-2 rounded-md mx-2'>
                    <img src={require('../../images/card3.png')} alt="" />
                </div>
                <div className='shadow-2xl border-2 rounded-md mx-2'>
                    <img src={require('../../images/card1.png')} alt="" />
                </div>
                <div className='shadow-2xl border-2 rounded-md mx-2'>

                    <img src={require('../../images/card2.png')} alt="" />
                </div>
            </div>
            <h1 className='text-center text-4xl font-serif font-bold my-20 text-[#2193b0]'>2023 Update Car </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2   gap-16 text-center md:px-20 '>
                <div className='shadow-2xl mx-2 md:flex justify-between items-center gap-5 bg-slate-100 p-5 rounded-lg'>
                    <img className='w-[50%] mx-auto' src={require('../../images/car/car-1.png')} alt="" />
                    <div>
                        <p className='py-1 text-left font-serif  font-medium text-xl'>Names : Porsche 911 Carrera </p>
                        <p className='py-1 text-left font-medium'>Price: $59283429</p>
                        <p className='py-1 text-left font-light'>Description : Discover Luxury Car Hire Dubai At Shopwebly! - Easily Found! Easy Acces. Search and Discover. Quick Results. Compare Products. Find Easily. Many Products. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.</p>
                        <button className='flex justify-center mt-2 items-center px-8 py-1 rounded-xl shadow-lg bg-[#FF0066] text-white  font-bold'>
                            <span className='text-xl uppercase mr-3'>Buy Now</span>
                            <img className='w-8' src={require('../../images/arrow-56-xxl.png')} alt="" />
                        </button>
                    </div>
                </div>
                <div className='shadow-2xl mx-2 md:flex justify-between items-center gap-5 bg-slate-100 p-5 rounded-lg'>
                    <img className='w-[50%] mx-auto' src={require('../../images/car/car-2.png')} alt="" />
                    <div>
                        <p className='py-1 text-left font-serif  font-medium text-xl'>Names : Lamborghini Diablo </p>
                        <p className='py-1 text-left font-medium'>Price: $9283429</p>
                        <p className='py-1 text-left font-light'>Description : Discover Luxury Car Hire Dubai At Shopwebly! - Easily Found! Easy Acces. Search and Discover. Quick Results. Compare Products. Find Easily. Many Products. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.</p>
                        <button className='flex justify-center mt-2 items-center px-8 py-1 rounded-xl shadow-lg bg-[#FF0066] text-white  font-bold'>
                            <span className='text-xl uppercase mr-3'>Buy Now</span>
                            <img className='w-8' src={require('../../images/arrow-56-xxl.png')} alt="" />
                        </button>
                    </div>
                </div>
                <div className='shadow-2xl mx-2 md:flex justify-between items-center gap-5 bg-slate-100 p-5 rounded-lg'>
                    <img className='w-[50%] mx-auto' src={require('../../images/car/car-3.png')} alt="" />
                    <div>
                        <p className='py-1 text-left font-serif  font-medium text-xl'>Names : Ferrari 812 Superfast </p>
                        <p className='py-1 text-left font-medium'>Price: $183429</p>
                        <p className='py-1 text-left font-light'>Description : Discover Luxury Car Hire Dubai At Shopwebly! - Easily Found! Easy Acces. Search and Discover. Quick Results. Compare Products. Find Easily. Many Products. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.</p>
                        <button className='flex justify-center mt-2 items-center px-8 py-1 rounded-xl shadow-lg bg-[#FF0066] text-white  font-bold'>
                            <span className='text-xl uppercase mr-3'>Buy Now</span>
                            <img className='w-8' src={require('../../images/arrow-56-xxl.png')} alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;