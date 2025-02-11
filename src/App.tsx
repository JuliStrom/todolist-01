import './App.css'
import {TaskType, TodoList} from "./TodoList.tsx";
import {useState} from "react";

export type FilterValuesType = 'All' | 'Active' | 'Completed'

export function App() {
//Data Create Read Update Delete

    const todoListTitle = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "REACT", isDone: true},
        {id: 4, title: "TS", isDone: false},
        {id: 5, title: "ANGULAR", isDone: false},
    ])

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }


//UI
    const [filter, setFilter] = useState<FilterValuesType>('All')
    const changeTodoListFilter = (newFilterValue: FilterValuesType) => {
        setFilter(newFilterValue)
    }

    let tasksForTodoList = tasks
    if (filter === 'Active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
        console.log(tasksForTodoList)
    }
    if (filter === 'Completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
        console.log(tasksForTodoList)
    }


    return (
        <div className="app">
            <TodoList
                title={todoListTitle}
                tasks={tasksForTodoList}
                deleteTask={deleteTask}
                changeTodoListFilter={changeTodoListFilter}/>
        </div>
    )
}

