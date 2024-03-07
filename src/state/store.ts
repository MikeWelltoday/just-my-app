import {combineReducers, legacy_createStore} from 'redux'
import {todolistsReducer} from './todolists-reducer/todolists-reducer'
import {tasksReducer} from './tasks-reducer/tasks-reducer'

export type RootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store