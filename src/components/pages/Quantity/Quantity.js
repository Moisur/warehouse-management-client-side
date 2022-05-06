import React from 'react';
import { useParams } from 'react-router-dom';
const Quantity = () => {
    const { id } = useParams()
    console.log(id)
    const HandelQuantity =(event)=>{
        event.preventDefault()
       
    }
    return (
        <div>
            <form onSubmit={HandelQuantity}> 
                <input type="number" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Quantity;