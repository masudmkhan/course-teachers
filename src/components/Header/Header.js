import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href="/home">Home</a>
                <a href="/order-review">Order Review</a>
                <a href="/about-us">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
            <p className='title'>
                Make a Learning Team
                <br />
                Total Budget: <span className='budget'>100 Million</span>
            </p>
        </div>
    );
};

export default Header;