import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <p>
                Make a Learning Team
                <br />
                Total Budget: <span className='budget'>100 Million</span>
            </p>
        </div>
    );
};

export default Header;