import React from 'react';

const AddTaskForm = (props) => {
    return (
        <div>
            <input onChange={props.onChange} className='AddTaskInput' type="text" placeholder='Add new task' value={props.value}/>
            <button onClick={props.add} className='btn'>Add item</button>
        </div>
    )  
};

export default AddTaskForm;