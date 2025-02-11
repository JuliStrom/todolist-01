import {Button} from "./components/button/Button.tsx";
import {FilterValuesType} from "./App.tsx";


type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (taskId: number) => void
    changeTodoListFilter: (newFilterValue: FilterValuesType) => void
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}



export const TodoList = ({title, tasks, deleteTask, changeTodoListFilter}: TodoListPropsType) => {
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
    if (tasks.length) {
        tasksList = <ul>
            {tasks.map(task => {
                const deleteTaskHandler = () => deleteTask(task.id)
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <Button title='X' onClickHandler={deleteTaskHandler}/>
                    </li>
                )
            })}
        </ul>
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button title={'All'} onClickHandler={() => changeTodoListFilter('All')}/>
                <Button title={'Active'} onClickHandler={() => changeTodoListFilter('Active')}/>
                <Button title={'Completed'} onClickHandler={() => changeTodoListFilter('Completed')}/>
            </div>
        </div>
    )
}