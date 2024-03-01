import {TasksStateType} from '../../App'
import {v1} from 'uuid'
import {AddTodolistAC, RemoveTodolistAC, todolistId1, todolistId2} from '../todolist-reducer/todolists-reducer'

type TasksActionType =
    ReturnType<typeof removeTaskAc>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeStatusAC>
    | ReturnType<typeof changeTaskTitleAC>
    | ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistAC>

export function removeTaskAc(todolistId: string, taskId: string) {
    return {type: 'TASKS-REMOVE-TASK', todolistId, taskId} as const
}

export function addTaskAC(todolistId: string, newTitle: string) {
    return {type: 'TASKS-ADD-TASK', todolistId, newTitle} as const
}

export function changeStatusAC(todolistId: string, taskId: string, isDone: boolean) {
    return {type: 'TASKS-CHANGE-STATUS', todolistId, taskId, isDone} as const
}

export function changeTaskTitleAC(todolistId: string, taskId: string, newTitle: string) {
    return {type: 'TASKS-CHANGE-TITLE', todolistId, taskId, newTitle} as const
}

const initialState: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: 'Milk', isDone: true},
        {id: v1(), title: 'React Book', isDone: true}
    ]
}

export function tasksReducer(state: TasksStateType = initialState, action: TasksActionType): TasksStateType {

    switch (action.type) {

        case'TASKS-REMOVE-TASK': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        }

        case'TASKS-ADD-TASK': {
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.newTitle, isDone: false}, ...state[action.todolistId]]
            }
        }

        case'TASKS-CHANGE-STATUS': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    isDone: action.isDone
                } : t)
            }
        }

        case'TASKS-CHANGE-TITLE': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    title: action.newTitle
                } : t)
            }
        }

        case 'REMOVE-TODOLIST': {
            delete state[action.id]
            return {...state}
        }

        case 'ADD-TODOLIST': {
            return {...state, [action.todolistId]: []}
        }


        default: {
            return state
        }
    }
}





















