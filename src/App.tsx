import React, {useReducer} from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {addTaskAC, removeTaskAC, tasksData, tasksReducer} from './tasks-reducer'
import {filterAC, filterReducer} from './filter-reducer'

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    const [tasks, dispatch] = useReducer(tasksReducer, tasksData)

    function removeTask(id: string) {
        dispatch(removeTaskAC(id))
    }

    function addTask(title: string) {
        dispatch(addTaskAC(title))
    }

    let [filter, dispatchFilter] = useReducer(filterReducer, 'all')

    let tasksForTodolist = tasks
    if (filter === 'active') tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
    if (filter === 'completed') tasksForTodolist = tasksForTodolist.filter(t => t.isDone)

    function changeFilter(value: FilterValuesType) {
        dispatchFilter(filterAC(value))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    )
}

export default App
