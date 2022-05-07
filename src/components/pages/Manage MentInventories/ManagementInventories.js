import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserFetch from '../../shared/UserFetch/UserFetch';
import '../../pages/Home/Home.css'
const ManagementInventories = () => {
    const { id } = useParams()
    const [product, setRef] = UserFetch(`http://localhost:5000/products/${id}`)
    const [count, setCount] = useState(0)
    const CountHandel = () => {
        setCount(count + 1)
    }
    const QuantityInputAdd = (event) => {
        event.preventDefault()
        const quantity = event.target.QuantityValue.value;
        fetch(`http://localhost:5000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setRef(true)
                }
            });
    };
    return (
        <div className='py-20'>
            <div className='bgStyles border-2 w-[330px] md:w-[400px] mx-auto p-5 text-xl text-white font-medium  rounded-2xl shadow-2xl'>
                <img className='w-100 rounded-2xl mb-4' src={product.images} alt="" />
                <p>Names:{product.names}</p>
                <p>Price:{product.prices}</p>
                <p>Supply Names:{product.supplyNames}</p>
                <div className='flex justify-between items-center mb-4 '>
                    <p>quantity:{product.quantity > 0 ? product.quantity - count : 0}</p>
                    <span className='cursor-pointer' onClick={CountHandel}>++</span>
                </div>
                <form onSubmit={QuantityInputAdd}>
                    <input className='text-black outline-none mb-4 px-3 rounded-lg py-1' type="number" name='QuantityValue' placeholder='quantity' /><br />
                    <input className='bg-[#FF0066] text-white rounded px-3 py-1 mb-4' type="submit" value='submit' />
                </form>
            </div>
            <div className='w-[400px] mx-auto my-20'>
                <Link to='/manages' className='  flex justify-center mt-2 items-center px-8 py-1 rounded-xl shadow-lg bg-[#FF0066] text-white  font-bold'>
                    <span className='text-xl uppercase mr-3'>Manages Items</span>
                    <img className='w-8' src={require('../../images/arrow-56-xxl.png')} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default ManagementInventories;