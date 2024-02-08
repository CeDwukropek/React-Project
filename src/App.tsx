import React, { useState } from 'react';
import './App.css';
import { useTasks } from './hooks/useTasks';
import { Task } from './components/Task';
import {v4 as uuid} from 'uuid'

function App() {
  const {tasks, addTask, removeTask, completeTask} = useTasks();
  const [toDoVal, setTasks] = useState<string>("")

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
      <div>
        <input type='text' value={toDoVal} onChange={e => setTasks(e.target.value)} />
        <button onClick={() => {
            addTask({id: ID, value: toDoVal, completed: false})
            setTasks("")
          }}>Add</button>
      </div>
    </div>
  );
}

export default App;
