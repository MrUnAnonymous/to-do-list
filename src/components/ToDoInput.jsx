import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './styles.css'
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const ToDoInput = () => {
    //Creating a state to save the to do list text
    const [toDoText, setToDoText] = useState('');
    console.log(toDoText);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //Adding the text to the to do list
        dispatch(addTodo(toDoText));
        console.log("TODOTEXT--------------->",toDoText)
    }

  return (
    <div className='to-do-input'>
        <form onSubmit={handleSubmit}>
            <input 
                className='input'
                type="text" 
                value={toDoText} 
                onChange={e => setToDoText(e.target.value)}
                placeholder='Add'
            />
            <button className='addButton'>Add</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
    addTodo,
  };
  
export default connect(null, mapDispatchToProps)(ToDoInput);