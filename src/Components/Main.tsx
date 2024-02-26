import { useState } from "react";
import { useTasks } from "../Hooks/useTasks";
import { Task } from "./Task";
import {v4 as uuid} from 'uuid'
import {useNavigate} from "react-router-dom";
import { getAuth } from "firebase/auth";


export const Main = () => {
  const navigate = useNavigate()

  const auth = getAuth()
  const user = auth.currentUser;

  if(!user) {
    console.log("not logged")
    navigate('/')
  }

  const {tasks, addTask, removeTask, completeTask} = useTasks();
  const [toDoVal, setTasks] = useState<string>("")

  let ID = uuid()

  return(
    <>
    <div className="shadow"></div>
    {tasks.map((item) => (
        <Task
          id={item.id}
          value={item.value}
          completed={item.completed}
          delete={() => removeTask(item)}
          complete={() => completeTask(item)}
        />
      ))}
      <div className="task">
        <input type='text' value={toDoVal} onChange={e => setTasks(e.target.value)} />
        <button className="button" onClick={() => {
            addTask({id: ID, value: toDoVal, completed: false})
            setTasks("")
          }}>Create</button>
      </div>
    </>
  )
}
