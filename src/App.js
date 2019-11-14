import React, {Component} from 'react';
import nanoid from 'nanoid';

import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";
import './App.css';

class App extends Component {
    state = {
        text: '',
        tasks: [],
    };

    changeText = (event) => {
        const text = event.target.value;

        this.setState({text: text})
    };

    addTask = () => {
        const tasks = [...this.state.tasks];
        const newTask = {text: this.state.text, id: nanoid()};
        tasks.push(newTask);

        this.setState({tasks: tasks});
    };

    deleteTask(id){
        const tasks = [...this.state.tasks];
        const taskIndex = tasks.findIndex(task => task.id === id);
        tasks.splice(taskIndex, 1);

        this.setState({tasks});
    }

    render() {
        const tasks = this.state.tasks.map(task => (<Task key={task.id} text={task.text} delete={() => this.deleteTask(task.id)}/>));

        return (
            <div className='App'>
                < AddTaskForm value={this.state.text} onChange={this.changeText} add={this.addTask}/>
                <div>
                    {tasks}
                </div>
            </div>
        );
    }
}

export default App;
