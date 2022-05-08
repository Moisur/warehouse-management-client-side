import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Title from '../../shared/Title/Title';
import UserFetch from '../../shared/UserFetch/UserFetch';
import UserProduct from '../../shared/userProduct/UserProduct';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user.email
    const [product] = UserFetch(`http://localhost:5000/items?email=${email}`)
    const [slider, setSlider] = useState(false)
    return (
        <div>
            <Title title={MyItems}></Title>
            <div className='px-10 py-5 '>
                {
                    slider ? <img className='w-[1000px] mx-auto shadow-2xl rounded-3xl' src={require('../../images/yaVQei.jpg')} alt="" /> : <img className='w-[1000px] mx-auto shadow-2xl rounded-3xl' src={require('../../images/carbg.jpg')} alt="" />
                }

            </div>
            <div className='px-10 flex justify-between items-center my-5'>
                <button onClick={() => setSlider(!slider)}>
                    <img className='w-14 bg-white rounded-3xl p-1 shadow-2xl' src={require('../../images/1608508_angle_left_icon.png')} alt="" />
                </button>
                <button onClick={() => setSlider(!slider)}>
                    <img className='w-14 bg-white rounded-3xl p-1 shadow-2xl' src={require('../../images/1608509_angle_right_icon.png')} alt="" />
                </button>
            </div>
            <h1 className='text-center text-4xl font-serif font-bold my-20'>My Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:px-20 mb-10'>
                {
                    product.map(pd => <UserProduct
                        key={pd._id}
                        pd={pd}
                    ></UserProduct>)
                }
            </div>
            <div className='text-center'>
                <Link className='' to='/manages'>
                    <h1 className=' w-[300px] mx-auto  bg-[#FF0066] rounded-lg shadow-xl  mt-5 mb-10 text-3xl px-3 py-1 text-white font-serif font-bold'>Manages Items</h1>
                </Link>
            </div>
        </div>
    );
};

export default MyItems;