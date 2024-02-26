

export type Task = {
    id: string
    value: string
    completed: boolean
}

type TaskComponent = {
    delete: () => void
    complete: () => void
} & Task

export const Task = (props: TaskComponent) => {
    return(
        <div className="task">
            <div key={props.id} className={props.completed ? "completed" : ""}>
                <p>{props.value}</p>
                <button onClick={props.delete}>Remove</button>
                <button onClick={props.complete}>Complete</button>
            </div>
        </div>
    )
}