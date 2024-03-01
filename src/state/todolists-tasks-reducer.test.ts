import {TasksStateType, TodolistType} from '../App'
import {v1} from 'uuid'
import {
    AddTodolistAC,
    AddTodolistActionType,
    RemoveTodolistAC,
    todolistsReducer
} from './todolist-reducer/todolists-reducer'
import {tasksReducer} from './tasks-reducer/tasks-reducer'

let todolistId1: string
let todolistId2: string

let todolistsStartState: TodolistType[]
let tasksStartState: TasksStateType

beforeEach(() => {

    todolistId1 = 'todolistId1'
    todolistId2 = 'todolistId2'

    todolistsStartState = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    tasksStartState = {
        [todolistId1]: [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'JS', isDone: true}
        ],
        [todolistId2]: [
            {id: '1', title: 'Milk', isDone: true},
            {id: '2', title: 'React Book', isDone: true}
        ]
    }

})

test('REMOVE-TODOLIST', () => {

    const todolistId = todolistId2

    const todolistsEndState = todolistsReducer(todolistsStartState, RemoveTodolistAC(todolistId))
    const tasksEndState = tasksReducer(tasksStartState, RemoveTodolistAC(todolistId))

    expect(todolistsEndState.length).toBe(1)
    expect(todolistsEndState[0].id).toBe(todolistId1)

    expect(tasksEndState[todolistId]).toBeUndefined()

})

test('ADD-TODOLIST', () => {

    const newTitle = 'NEW TODOLIST'

    const action = AddTodolistAC(newTitle)

    const todolistsEndState = todolistsReducer(todolistsStartState, action)
    const tasksEndState = tasksReducer(tasksStartState, action)

    const idFromTodolists = todolistsEndState[2].id

    const keys = Object.keys(tasksEndState)
    const idFromTAsks = keys[2]

    expect(todolistsEndState.length).toBe(3)
    expect(todolistsEndState[2].title).toBe(newTitle)
    
    expect(idFromTodolists).toBe(idFromTAsks)

    expect(tasksEndState[idFromTAsks]).toEqual([])
})
















