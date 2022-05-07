import { useState, useEffect } from 'react';

function UserFetch(url) {
    const [product, setProduct] = useState([])
    const [quantityRef, setRef] = useState(false)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[quantityRef,product])
    return [product,setRef];
}
export default UserFetch;