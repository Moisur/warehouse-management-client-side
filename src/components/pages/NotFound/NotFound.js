import React from 'react';
import Title from '../../shared/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <Title
                title={NotFound}></Title>
            <div className='bg-images text-3xl p-10 text-white '>
                <Link to='/'><FontAwesomeIcon icon={faXmark} /></Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default NotFound;