import React, {useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserFetch from '../../shared/UserFetch/UserFetch';

const ManagementInventories = () => {
    const { id } = useParams()
    const [product] = UserFetch(`http://localhost:5000/products/${id}`)
    const [count, setCount] = useState(0)
    const CountHandel = () => {
        setCount(count+1)
    }
    return (
        <div>
            <div className='w-[400px] mx-auto text-2xl'>
                <img className='w-100' src={product.images} alt="" />
                <p>Names:{product.names}</p>
                <p>Price:{product.prices}</p> 
                <p>Supply Names:{product.supplyNames}</p>
                <div className='flex justify-between items-center'>
                    <p>quantity:{product.quantity > 0 ? product.quantity - count : 0}</p>
                    <div>
                        <span className='cursor-pointer' onClick={CountHandel}>++</span>
                        <Link to='/quantity'>Edit</Link>
                    </div>
                </div>
               
            </div>
            {/* ====================== ==========================  */}
        </div>
    );
};

export default ManagementInventories;