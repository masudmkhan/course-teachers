import React from 'react';
import './SelectedTeachers.css'

const SelectedTeachers = (props) => {
    const {img, name, salary} = props.teacher;
    return (
        <div className='selected-teachers'>
            <img src={img} alt="" />
            <div>
                <p>
                    {name}
                    <br />
                    Salary: {salary}
                </p>
            </div>
            <button onClick={props.removeFromCart} className='btn-remove'>X</button>
        </div>
    );
};

export default SelectedTeachers;