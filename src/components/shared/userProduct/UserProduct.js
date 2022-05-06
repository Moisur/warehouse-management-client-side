import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProduct = ({pd}) => {
    const Navigate=useNavigate()
    return (
        <div>
            <img src={pd.images} alt="" />
            <p>Names:{pd.names}</p>
            <p>Price:{pd.prices}</p>
            <p>Supply Names:{pd.supplyNames}</p>
            <p>Quantity:{pd.quantity}</p>
            <p>Description:{pd.description}</p>
            <button onClick={() => Navigate(`/managementInventories/${pd._id}`)} className='bg-gray-700 text-white rounded px-3 py-1 '>Update button</button>
        </div>
    );
};

export default UserProduct;