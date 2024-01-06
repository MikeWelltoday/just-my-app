import {CourseType} from './04'

// ----------------------------------------------------------------

test.skip('should take only men older than 90', () => {

    const ages: number[] = [18, 20, 22, 1, 100, 90, 14]

    const oldAges: number[] = ages.filter(item => item > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test.skip('should take only courses cheaper than 160', () => {

    const courses: CourseType[] = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const cheapCourses: CourseType[] = courses.filter(item => item.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[0].price).toBe(100)
    expect(cheapCourses[1].title).toBe('REACT')
    expect(cheapCourses[1].price).toBe(150)

})

test.skip('COMPLETED TASK FILTER', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
        {id: 5, title: 'Apple', isDone: false}
    ]

    const completedTasks = tasks.filter(item => item.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[0].isDone).toBe(true)
    expect(completedTasks[1].id).toBe(4)
    expect(completedTasks[1].title).toBe('Sugar')
    expect(completedTasks[1].isDone).toBe(true)

})











