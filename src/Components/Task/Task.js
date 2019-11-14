import React from 'react';

import './Task.css';

const Task = (props) => {
    return (
        <div className='task_tab'>
            <span>{props.text}</span>
            <button className='task_btn' onClick={props.delete}>Delete</button>
        </div>
    );
};

export default Task;