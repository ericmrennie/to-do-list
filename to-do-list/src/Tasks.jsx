import React, { useState } from "react";
import './App.css';

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    console.log(tasks);

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, { text: input, completed: false}]);
            setInput('');
        }
    };



    return(
        <div className="app">
            <header className="header">
                <h1>To-Do List</h1>
            </header>
            <div className="input-container">
                <label htmlFor="task">Enter Task: </label>
                <input 
                    type="text" 
                    id="task"
                    name="task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => )}
            </ul>
        </div>
    )
}