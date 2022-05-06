import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../shared/Spinner/Spinner';
import Title from '../../shared/Title/Title';


const AddItems = () => {
    const [user] = useAuthState(auth);
    const addProduct = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const names = event.target.names.value;
        const prices = event.target.prices.value;
        const quantity = event.target.quantity.value;
        const supplyNames = event.target.supplyNames.value;
        const description = event.target.description.value;
        const images = event.target.images.value;
        if (email !== '' || names !== '' || prices !== '' || quantity !== '' || supplyNames !== '' || description !== '' || images !== '') {
            const data ={ email, names, prices, quantity, supplyNames, description, images };
            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
        }
        else {
            return <Spinner></Spinner>
        }

    }






    return (
        <div>
            <Title title={AddItems}></Title>
            <div className='w-[500px] mx-auto p-10 bg-slate-600 '>
                <h1 className='text-2xl text-center text-white'> Add items </h1>
                <form onSubmit={addProduct}>
                    <div>
                        <label className='text-white' htmlFor="email">Your Email</label><br />
                        <input className='w-full outline-none' name='email' type="email" id="email" value={user.email} required disabled />
                    </div>
                    <div>
                        <label className='text-white' htmlFor="names">Product Names</label><br />
                        <input className='w-full outline-none' type="text" name='names' id='names' required />
                    </div>
                    <div>
                        <label className='text-white' htmlFor="prices">Product Prices</label><br />
                        <input className='w-full outline-none' type="text" name='prices' id='prices' required />
                    </div>
                    <div>
                        <label className='text-white' htmlFor="quantity">Product Quantity</label><br />
                        <input className='w-full outline-none' type="text" name='quantity' id='quantity' required />
                    </div>
                    <div>
                        <label className='text-white' htmlFor="supplyNames">Product Suppline Names</label><br />
                        <input className='w-full outline-none' type="text" name='supplyNames' id='supplyNames ' required />
                    </div>
                    <div>
                        <label className='text-white' htmlFor="description">Product Description</label><br />
                        <textarea className='w-full outline-none' name="description" id="description" rows="3"></textarea>
                    </div>
                    <div>
                        <label className='text-white' htmlFor="images">Product Images</label><br />
                        <input className='w-full outline-none' name='images' type="text" id='images ' required />
                    </div>
                    <input className='w-full outline-none bg-red-500 py-2 my-4' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddItems;