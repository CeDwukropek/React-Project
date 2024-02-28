import { useState } from "react"
import { Task } from "../Components/Task";

export const useTasks = () => {
    
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task:Task) => {
        setTasks([...tasks, task])
    }

    const removeTask = (task: Task) => {
        setTasks(tasks.filter((item) => item.id !== task.id));
    }

    const completeTask = (task: Task) => {
        let index = tasks.indexOf(task)
        tasks[index].completed = !task.completed
        setTasks([...tasks])
    }


    return {
        tasks,
        addTask,
        removeTask,
        completeTask
    };
}

function useForm<T>(arg0: { resolver: any; }): { register: any; handleSubmit: any; formState: { errors: any; }; } {
    throw new Error("Function not implemented.");
}


function yupResolver(schema: any) {
    throw new Error("Function not implemented.");
}


function collection(db: any, arg1: string) {
    throw new Error("Function not implemented.");
}


function addDoc(postsRef: any, arg1: any) {
    throw new Error("Function not implemented.");
}
