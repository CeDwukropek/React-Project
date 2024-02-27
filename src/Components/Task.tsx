import Cross from '../images/cross-small.svg';
import Check from '../images/check.svg';

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
        <div key={props.id} className={`task ${props.completed ? "completed" : ""}`}>
            <p>{props.value}</p>
            <div className="container">
                <button className="button remove" onClick={props.delete}><img src={Cross} alt="My Icon" className='icon' /></button>
                <button className="button complete" onClick={props.complete}><img src={Check} alt="My Icon" className='icon' /></button>
            </div>
        </div>
    )
}