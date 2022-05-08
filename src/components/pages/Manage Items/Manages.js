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
        fetch(`https://rocky-tundra-02807.herokuapp.com/items?pages=${pages}&sizes=${sizes}`)
            .then(res => res.json())
            .then(data => {
                try {
                    console.log(data)
                    setProduct(data)
                } catch (error) {
                    console.log('  Error ', error)
                }

            })
    }, [pages, sizes, Deletes])
    useEffect(() => {
        fetch(`https://rocky-tundra-02807.herokuapp.com/itemsCount`)
            .then(res => res.json())
            .then(data => {
                const pages = Math.ceil(data.result)
                setPagesCount(pages)
            })
    }, [Deletes, product, pages])
    const deleteItems = (id) => {
        const deleteItems = window.confirm('Your Product Delete')
        if (deleteItems) {
            fetch(`https://rocky-tundra-02807.herokuapp.com/items/${id}`, {
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
    const [count, setCount] = useState(0)
    const CountHandel = () => {
        setCount(count + 1)
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
                                    Stock
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
                                        {product.quantity+count}
                                    </td>
                                    <td className="px-6 py-4 hidden md:block">
                                        <button onClick={CountHandel} className='bg-[#FF0066] text-white rounded font-bold px-3 py-1 mb-4 cursor-pointer'>Stock</button>
                                    </td>
                                    <td onClick={() => deleteItems(product._id)} className="px-6 py-4 cursor-pointer">
                                        <img className='w-14 bg-white mx-auto p-2 rounded-full' src={require('../../images/delete.png')} alt="" />
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                product == '' ? <div className='mt-20'>

                    <h1 className='text-center text-2xl mb-10 text-[#2193b0] font-serif font-medium'>Not Items Add !!!!</h1>
                    <img className='w-[200px] mx-auto' src={require('../../images/noresult.png')} alt="" />
                    <div className='text-center'>
                        <Link className='' to='/addItems'>
                            <h1 className=' w-[300px] mx-auto  bg-[#2193b0] rounded-lg shadow-xl  mt-5 mb-10 text-3xl px-3 py-1 text-white font-serif font-bold'>Add Items</h1>
                        </Link>
                    </div>

                </div> : ''
            }
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