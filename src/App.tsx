import './App.css'
import {TaskType, TodoList} from "./TodoList.tsx";

export function App() {
//Data
  const todoListTitle_1 = "What to learn"

  const tasks_1: Array<TaskType> = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "REACT", isDone: true},
    {id: 4, title: "TS", isDone: false},
    {id: 5, title: "ANGULAR", isDone: false},
  ]


  //UI
  return (
      <div className="app">
        <TodoList title={todoListTitle_1} tasks={tasks_1}/>
      </div>
  )
}

