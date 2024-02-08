import React, {useState} from 'react'
import './App.css'
import {TaskType, Todolist} from './Todolist'
import {v1} from 'uuid'

//===========================================================================================<

type ObjectType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodoFromServerType = {
    title: string
    filter: FilterValuesType
    tasks: TaskType[]
    students: string[]
}

type TodolistIdType = { todolistId: string }

//===========================================================================================<


function App() {

    const todoFromServer: TodoFromServerType[] = [
        {
            title: 'What to learn',
            filter: 'all',
            tasks: [
                {taskId: v1(), title: 'HTML&CSS', isDone: true},
                {taskId: v1(), title: 'JS', isDone: true}
            ],
            students:
                [
                    'Rick Kane',
                    'Finnlay Bentley'
                ]
        },
        {
            title: 'What to do',
            filter: 'all',
            tasks: [
                {taskId: v1(), title: 'HTML&CSS2', isDone: true},
                {taskId: v1(), title: 'JS2', isDone: true}
            ],
            students:
                [
                    'Jago Wormald1',
                    'Saul Milne2'
                ]
        }
    ]

    const [todos, setTodos] = useState<(TodoFromServerType & TodolistIdType)[]>(
        () => todoFromServer.map(t => ({...t, todolistId: v1()}))
    )

    function removeTask(taskId: string, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {
            ...t,
            tasks: t.tasks.filter(item => item.taskId !== taskId)
        } : t))
    }

    function addTask(title: string, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {
            ...t,
            tasks: [{taskId: v1(), title, isDone: false}, ...t.tasks]
        } : t))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {
            ...t,
            tasks: t.tasks.map(item => item.taskId === id ? {...item, isDone} : item)
        } : t))
    }

    function changeFilter(filter: FilterValuesType, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {...t, filter} : t))
    }

    function removeTodolist(todolistId: string) {
        setTodos(todos.filter(t => t.todolistId !== todolistId))
    }

    return (
        <div className="App">

            {todos.map(tl => {

                let tasks = tl.tasks
                if (tl.filter === 'active') tasks = tasks.filter(t => !t.isDone)
                if (tl.filter === 'completed') tasks = tasks.filter(t => t.isDone)

                return <Todolist
                    key={tl.todolistId}
                    id={tl.todolistId}
                    title={tl.title}
                    tasks={tasks}
                    filter={tl.filter}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    removeTodolist={removeTodolist}/>
            })}

        </div>
    )
}

export default App
