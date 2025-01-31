import {Btn} from "./components/button/Button.tsx";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
const btn_1 = "+"
const btn_2 = "All"
const btn_3 = "Active"
const btn_4 = "Completed"



export const TodoList = (props: TodoListPropsType) => {
    // const tasksList = props.tasks.length === 0
    //     ? <span>Your list is empty</span>
    //     : <ul>
    //         {props.tasks.map(tasks => {
    //             return (
    //                 <li>
    //                     <input type="checkbox" checked={tasks.isDone}/> <span>{tasks.title}</span>
    //                 </li>
    //             )
    //         })}
    //     </ul>
    let tasksList = <span>Your list is empty</span>
    if (props.tasks.length) {
        tasksList = <ul>
            {props.tasks.map(task => {
                return (
                    <li>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Btn title={btn_1}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Btn title={btn_2}/>
                <Btn title={btn_3}/>
                <Btn title={btn_4}/>
            </div>
        </div>
    )
}