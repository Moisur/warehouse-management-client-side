import { useState, useEffect } from 'react';

function UserFetch(url) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])
    return [product, setProduct];
}
export default UserFetch;