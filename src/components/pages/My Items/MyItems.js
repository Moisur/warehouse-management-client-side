import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Title from '../../shared/Title/Title';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user.email
    // http://localhost:5000/products?email=mosiurislamwebdesign@gmail.com
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/items?email=${email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <Title title={MyItems}></Title>
            This is MyItems
            <h1>{product.length}</h1>
        </div>
    );
};

export default MyItems;