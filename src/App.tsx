import React, {useState} from 'react'
import './App.scss'
import {TaskType, Todolist} from './component/Todolist'
import {v1} from 'uuid'
import {AddItemForm} from './component/addItemForm/AddItemForm'

export type FilterValuesType = 'all' | 'active' | 'completed';
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'React Book', isDone: true}
        ]
    })


    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t => t.id != id)
        setTasks({...tasks})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false}
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks]
        setTasks({...tasks})
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id != id))
        delete tasks[id]
        setTasks({...tasks})
    }
    
    function addNewTodolist(title: string) {
        let newTodolistId: string = v1()
        setTodolists([{id: newTodolistId, title, filter: 'all'}, ...todolists])
        setTasks(({...tasks, [newTodolistId]: [{id: v1(), title: 'YourTask', isDone: true}]}))
    }

    function changeTaskTitle(todolistId: string, taskId: string, title: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, title} : t)})
    }

    function changeTodolistTitle(todolistId: string, title: string) {
        setTodolists(todolists.map(t => t.id === todolistId ? {...t, title} : t))
    }


    return (
        <div className="App">

            <AddItemForm addTask={addNewTodolist}/>

            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id]
                let tasksForTodolist = allTodolistTasks

                if (tl.filter === 'active') tasksForTodolist = allTodolistTasks.filter(t => !t.isDone)
                if (tl.filter === 'completed') tasksForTodolist = allTodolistTasks.filter(t => t.isDone)

                return <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}
                />
            })
            }

        </div>
    )
}

export default App
