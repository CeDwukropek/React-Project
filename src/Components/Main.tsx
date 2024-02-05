import { useState } from "react";
import { useTasks } from "../Hooks/useTasks";
import { Task } from "./Task";
import {v4 as uuid} from 'uuid'

export const Main = () => {
  const {tasks, addTask, removeTask, completeTask} = useTasks();
  const [toDoVal, setTasks] = useState<string>("")

  let ID = uuid()

  return(
    <>
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
    </>
  )
}
