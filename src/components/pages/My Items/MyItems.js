import React, { } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Title from '../../shared/Title/Title';
import UserFetch from '../../shared/UserFetch/UserFetch';
import UserProduct from '../../shared/userProduct/UserProduct';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user.email
    const [product] = UserFetch(`http://localhost:5000/items?email=${email}`)
    return (
        <div>
            <Title title={MyItems}></Title>
            This is MyItems
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:px-20 mb-10'>
                {
                    product.map(pd => <UserProduct
                        key={pd._id}
                        pd={pd}
                    ></UserProduct>)
                }
            </div>
        </div>
    );
};

export default MyItems;