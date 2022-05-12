import { useState } from 'react';
import SelectedTeachers from '../SelectedTeachers/SelectedTeachers';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { clearDb, removeFromDb } from '../utilities/FakeDB/FakeDB';

const Cart = (props) => {

    const [remainingTeachers, setRemainingTeachers] = useState([]);

    const totalTeachers = props.allTeachers.length;
    let totalClass = 0;
    let totalSalary = 0;
    for (const eachTeacher of props.allTeachers) {
        totalClass = totalClass + eachTeacher.totalClass;
        totalSalary = totalSalary + eachTeacher.salary;
    };

    const removeFromCart = (teacher) => {
        const index = props.allTeachers.indexOf(teacher);
        if (index === -1) {
            setRemainingTeachers(remainingTeachers);
        }
        else {
            setRemainingTeachers(props.allTeachers.splice(index, 1));
        }
        removeFromDb(teacher.key);
    };

    const buyTeachers = () => {
        setRemainingTeachers(props.allTeachers.splice(0, totalTeachers));
        clearDb();
    };

    return (
        <div>
            <div className='main-cart'>
                <h3 className='cart-heading'>Teachers Cart</h3>
                <div className='cart-body'>
                    <div>Teachers Selected:</div>
                    <div className='cart-quantity'>{totalTeachers}</div>
                </div>
                <div className='cart-body'>
                    <div>Classes:</div>
                    <div className='cart-quantity'>{totalClass}</div>
                </div>
                <div className='cart-body'>
                    <div>Salary:</div>
                    <div className='cart-quantity'>${totalSalary}</div>
                </div>
                <div className='buy-cart'>
                    <button onClick={() => buyTeachers()} className='buy-teachers'><FontAwesomeIcon icon={faStore} /> Buy Now</button>
                </div>
            </div>
            <div className='cart-teachers'>
                {
                    props.allTeachers.map(teacher => <SelectedTeachers
                        key={teacher.key}
                        teacher={teacher}
                        removeFromCart={() => removeFromCart(teacher)}></SelectedTeachers>)
                }
            </div>
        </div>

    );
};

export default Cart;