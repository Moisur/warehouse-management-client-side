import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Home/Home.css'
const UserProduct = ({ pd,children }) => {
    const Navigate = useNavigate()
    return (
        <div className='bgStyles border-2 w-[330px] mx-auto p-5 text-xl text-white font-medium  rounded-2xl shadow-2xl'>
            <img className='w-100 h-52 mx-auto rounded-2xl shadow-xl' src={pd.images} alt="" />
            <p className='py-1'>Names : {pd.names}</p>
            <p className='py-1'>Price: {pd.prices}</p>
            <p className='py-1'>Supply Names : {pd.supplyNames}</p>
            <p className='py-1'>Quantity : {pd.quantity}</p>
            <p className='py-1'>Description : {pd.description}</p>
            <div className='text-center py-1'>
                <button onClick={() => Navigate(`/managementInventories/${pd._id}`)} className={`${children?'bg-[#FF0066] text-white font-serif font-medium rounded px-3 py-1':''}`}>{children}</button>
            </div>
        </div>
    );
};

export default UserProduct;