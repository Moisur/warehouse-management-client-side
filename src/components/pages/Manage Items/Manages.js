import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Title from '../../shared/Title/Title';
const Manages = () => {
    const [product, setProduct] = useState([])
    const [Deletes, setDelete] = useState(false)
    const [pages, setPages] = useState(0)
    const [sizes, setSizes] = useState(5)
    const [PagesCount, setPagesCount] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/itemsCount`)
            .then(res => res.json())
            .then(data => {
                const pages = Math.ceil(data.result)
                setPagesCount(pages)
            })
    }, [Deletes, product])
    useEffect(() => {
        fetch(`http://localhost:5000/items?pages=${pages}&sizes=${sizes}`)
            .then(res => res.json())
            .then(data => {
                try {
                    console.log(data)
                    setProduct(data)
                } catch (error) {
                    console.log('  Error ',error)
                }

            })
    }, [pages, sizes])
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
            <div className='md:px-7'>
                <div className=''>
                    <Link className='' to='/addItems'>
                        <h1 className=' w-[250px] bg-[#FF0066] rounded-lg shadow-xl mx-10 mt-5 mb-10 text-3xl px-3 py-1 text-white font-serif font-bold'>+ Add Items</h1>
                    </Link>
                    <table className='w-full mx-auto rounded-md'>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="hidden md:block px-6 py-2 text-xs text-gray-500">
                                Supply Names
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
                                        {product.supplyNames}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.names}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img className='w-20 mx-auto' src={product.images} alt="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {product.quantity}
                                    </td>
                                    <td className="px-6 py-4 hidden md:block">
                                        Edit
                                    </td>
                                    <td onClick={() => deleteItems(product._id)} className="px-6 py-4 cursor-pointer">
                                        <img  className='w-14 bg-white mx-auto p-2 rounded-full' src={require('../../images/delete.png')} alt="" />
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <div className='text-center mt-20'>
                    {
                        [...Array(PagesCount).keys()].map(pg => <span key={pg} onClick={() => setPages(pg)} className={`px-3 py-1 cursor-pointer border-2 mx-2 font-serif font-bold  ${pg === pages ? 'bg-red-600 text-white' : ''}`}>{pg + 1}</span>)
                    }
                    <select onChange={e => setSizes(e.target.value)}>
                        <option value="5" selected>5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Manages;