import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Shop.css'

const Shop = () => {
    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])

    const addToCart = (teacher) => {
        if (cart.includes(teacher)) {
            setCart(cart);
        }
        else {
            const newTeachers = [...cart, teacher];
            setCart(newTeachers);
        }
    };

    return (
        <div className='shop'>
            <div className='teachers'>
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.key}
                        teacher={teacher}
                        addToCart={() => addToCart(teacher)}
                    ></Teacher>)
                }
            </div>
            <div className='cart'>
                <Cart
                    allTeachers={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;