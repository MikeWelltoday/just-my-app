import React, {useState} from 'react'
import './App.css'
import {TaskType, Todolist} from './Todolist'
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistType = { id: string, title: string }

type TaskDataType = {
    data: TaskType[]
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: TaskDataType
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn'},
        {id: todolistId2, title: 'What to buy'}
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: 'HTML&CSS1111', isDone: true},
                {id: v1(), title: 'JS1111', isDone: true}
            ],
            filter: 'all'
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: 'HTML&CSS22222', isDone: true},
                {id: v1(), title: 'JS2222', isDone: true}
            ],
            filter: 'all'
        }
    })


    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
        console.log(tasks)
    }


    function removeTask(todolistId: string, taskId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== taskId)})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [...tasks[todolistId], newTask]})
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, isDone: newIsDone} : el)
        })
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTasks({...tasks, tasks[todolistId]: tasks[todolistId].data.map(t => t))


        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }

    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id].data
                if (tasks[el.id].filter === 'active') {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                }
                if (tasks[el.id].filter === 'completed') {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                }
                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        filter={tasks[el.id].filter}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    )
}

export default App
