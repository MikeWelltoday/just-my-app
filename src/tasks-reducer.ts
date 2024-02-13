import {TaskType} from './Todolist'
import {v1} from 'uuid'

//=========================================================================

export const tasksData: TaskType[] = [
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'ReactJS', isDone: false},
    {id: v1(), title: 'Rest API', isDone: false},
    {id: v1(), title: 'GraphQL', isDone: false}
]


//=========================================================================

// автоматическая типизация =>
// 1. пишем AC
// 2.на основе AC автоматически делаем типизацию
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>

type AddTaskActionType = ReturnType<typeof addTaskAC>

type TaskReducerActionType = RemoveTaskActionType | AddTaskActionType

//=========================================================================

export function removeTaskAC(id: string) {
    // !!! обязательно as const для TS
    return {
        type: 'REMOVE-TASK',

        // все кроме type поместим в отдельный объект payload
        payload: {
            id
        }
    } as const
}

export function addTaskAC(title: string) {
    // !!! обязательно as const для TS
    return {
        type: 'ADD-TASK',

        // все кроме type поместим в отдельный объект payload
        payload: {
            title,
            id: v1()
        }
    } as const
}

//=========================================================================


export const tasksReducer = (state: TaskType[] = tasksData, action: TaskReducerActionType): TaskType[] => {

    switch (action.type) {

        case 'REMOVE-TASK': {
            return state.filter(t => t.id != action.payload.id)
        }

        case 'ADD-TASK': {
            return [{id: action.payload.id, title: action.payload.title, isDone: false}, ...state]
        }

        default: {
            return [...state]
        }
    }
}

//=========================================================================











