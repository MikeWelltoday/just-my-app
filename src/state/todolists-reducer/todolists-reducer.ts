import {v1} from 'uuid'
import {FilterValuesType, TodolistType} from '../../App'


//========================================================================================
// 🎲 .T.Y.P.E.S.

type Action =
    ReturnType<typeof addTodolistAC>
    | ReturnType<typeof removeTodolistAC>
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>


//========================================================================================
// 🍌 .A.C.

export function addTodolistAC(newTodolistTitle: string) {
    return {type: 'ADD-TODOLIST', payload: {newTodolistTitle, id: v1()}} as const
}

export function removeTodolistAC(todolistId: string) {
    return {type: 'REMOVE-TODOLIST', payload: {todolistId}} as const
}

export function changeTodolistTitleAC(todolistId: string, newTitle: string) {
    return {type: 'CHANGE-TODOLIST-TITLE', payload: {todolistId, newTitle}} as const
}

export function changeTodolistFilterAC(todolistId: string, mode: FilterValuesType) {
    return {type: 'CHANGE-TODOLIST-FILTER', payload: {todolistId, mode}} as const
}

//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

export function todolistsReducer(state: TodolistType[], {type, payload}: Action): TodolistType[] {

    switch (type) {

        case 'ADD-TODOLIST': {
            return [{id: payload.id, title: payload.newTodolistTitle, filter: 'all'}, ...state]
        }

        case 'REMOVE-TODOLIST': {
            return state.filter(t => t.id !== payload.todolistId)
        }

        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(t => t.id === payload.todolistId ? {...t, title: payload.newTitle} : t)
        }

        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(t => t.id === payload.todolistId ? {...t, filter: payload.mode} : t)
        }

        default: {
            return state
        }

    }
}