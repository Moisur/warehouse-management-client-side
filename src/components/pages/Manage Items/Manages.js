import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Title from '../../shared/Title/Title';
const Manages = () => {
    const [product, setProduct] = useState([])
    const [Deletes, setDelete] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [Deletes, product])
    const deleteItems = (id) => {
        const deleteItems = window.confirm('Your Product Delete')
        if (deleteItems) {
            fetch(`http://localhost:5000/items/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDelete(true)
                        toast.success("Items Delete")
                    }
                })
        }
        else {
            return toast.error('Not Items Delete')
        }
    }
    return (
        <div className='mb-80'>
             <Title title={Manages}></Title>
            <div className='py-2'>
                <div>
                    <table className='w-screen'>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="hidden md:block px-6 py-2 text-xs text-gray-500">
                                    ID
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Name
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    images
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Quantity
                                </th>
                                <th className="hidden md:block px-6 py-2 text-xs text-gray-500">
                                    Edit
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-slate-100">
                            {
                                product.map(product => <tr key={product._id} className="text-center">
                                    <td className="hidden md:block px-6 py-4 text-sm text-gray-500">
                                        {product._id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.names}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img className='w-20' src={product.images} alt="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {product.quantity}
                                    </td>
                                    <td className="px-6 py-4 hidden md:block">
                                        Edit
                                    </td>
                                    <td onClick={() => deleteItems(product._id)} className="px-6 py-4 cursor-pointer">
                                        Delete
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manages;