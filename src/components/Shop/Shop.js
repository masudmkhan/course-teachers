import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Shop.css'

const Shop = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect( () => {
        fetch('./FakeData.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data));
    },[])
    
    return (
        <div className='shop'>
            <div className='teachers'>
                {
                    teachers.map(teacher => <Teacher
                    key={teacher.key}
                    teacher={teacher}
                    ></Teacher>)
                }
            </div>
            <div className='cart'>

            </div>
        </div>
    );
};

export default Shop;