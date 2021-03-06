import React from 'react';
import './Teacher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Teacher = (props) => {
    const { name, img, age, subject, totalClass, salary, } = props.teacher;
    return (
        <div className='teacher'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>
                Age: <span className='teacher-details'>{age}</span>
                <br />
                Subject: <span className='teacher-details'>{subject}</span>
                <br />
                Classes: <span className='teacher-details'>{totalClass}</span>
                <br />
                Salary: <span className='teacher-details'>${salary}</span>
            </p>
            <button onClick={props.addToCart} className='add-to-cart'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
        </div>
    );
};

export default Teacher;