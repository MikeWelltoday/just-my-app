const ages: number[] = [18, 20, 22, 1, 100, 90, 14]

export function predicate(age: number) {
    return age > 90
}

const oldAges: number[] = [100]

// ----------------------------------------------------------------

export type CourseType = {
    title: string,
    price: number
}


const courses: CourseType[] = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

export function cheapPredicate(course: CourseType) {
    return course.price < 160
}

const cheapCourses: CourseType[] = [{title: 'REACT', price: 150}]
