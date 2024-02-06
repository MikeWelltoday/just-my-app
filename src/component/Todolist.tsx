import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import {FilterValuesType} from '../App'
import {AddItemForm} from './addItemForm/AddItemForm'
import {EditableSpan} from './editableSpan/EditableSpan'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => void
    changeTodolistTitle: (todolistId: string, title: string) => void
}

export function Todolist(props: PropsType) {

    function addTaskHandler(title: string) {
        props.addTask(title, props.id)
    }


    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter('all', props.id)
    const onActiveClickHandler = () => props.changeFilter('active', props.id)
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id)

    function changeTodolistTitle(title: string) {
        props.changeTodolistTitle(props.id, title)
    }

    function changeTaskTitleHandler(taskId: string) {
        return (title: string) => props.changeTaskTitle(props.id, taskId, title)
    }

    return <div>
        <h3>
            <EditableSpan changeTaskTitle={changeTodolistTitle}>{props.title}</EditableSpan>
            <button onClick={removeTodolist}>x</button>
        </h3>

        <AddItemForm addTask={addTaskHandler}/>

        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>

                        <EditableSpan changeTaskTitle={changeTaskTitleHandler(t.id)}>{t.title}</EditableSpan>

                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


