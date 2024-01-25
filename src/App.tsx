import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTasks } from './useTasks';
import { Task } from './Task';
import {v4 as uuid} from 'uuid'

function App() {
  const {tasks, addTask, removeTask, completeTask} = useTasks();

  let ID = uuid()

  return (
    <div className="App">
      {tasks.map((item) => (
        <Task
          id={item.id}
          value={item.value}
          completed={item.completed}
          delete={() => removeTask(item)}
          complete={() => completeTask(item)}
        />
      ))}
      <button onClick={() => addTask({id: ID, value: "Test" + ID, completed: false})}>Add</button>
    </div>
  );
}

export default App;
