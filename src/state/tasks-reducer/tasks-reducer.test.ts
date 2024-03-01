import {TasksStateType} from '../../App'
import {v1} from 'uuid'
import {addTaskAC, changeStatusAC, changeTaskTitleAC, removeTaskAc, tasksReducer} from './tasks-reducer'


let startState: TasksStateType

let todolistId1: string
let todolistId2: string

beforeEach(() => {

    todolistId1 = v1()
    todolistId2 = v1()

    startState = {
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

test('TASKS-REMOVE-TASK', () => {

    const todolistIdForTaskRemoval = todolistId2
    const taskIdForTaskRemoval = '2'

    const endState = tasksReducer(startState, removeTaskAc(todolistIdForTaskRemoval, taskIdForTaskRemoval))

    expect(endState[todolistIdForTaskRemoval].length).toBe(1)

})

test('TASKS-ADD-TASK', () => {

    const todolistIdForTaskAdd = todolistId2
    const newTitle = 'NEW TITLE'

    const endState = tasksReducer(startState, addTaskAC(todolistIdForTaskAdd, newTitle))

    expect(endState[todolistIdForTaskAdd].length).toBe(3)
    expect(endState[todolistIdForTaskAdd][0].title).toBe(newTitle)

})

test('TASKS-CHANGE-STATUS', () => {

    const todolistId = todolistId2
    const taskId = '2'
    const isDone = false

    const endState = tasksReducer(startState, changeStatusAC(todolistId, taskId, isDone))

    expect(endState[todolistId][1].isDone).toBe(isDone)

})


test('TASKS-CHANGE-STATUS', () => {

    const todolistId = todolistId2
    const taskId = '2'
    const newTitle = 'NEW TITLE'

    const endState = tasksReducer(startState, changeTaskTitleAC(todolistId, taskId, newTitle))

    expect(endState[todolistId][1].title).toBe(newTitle)

})












