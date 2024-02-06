import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react'

type AddNewItemPropsType = {
    addTask: (title: string) => void
}

export const AddItemForm: FC<AddNewItemPropsType> = (props) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        let newTitle = title.trim()
        if (newTitle !== '') {
            props.addTask(newTitle)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTaskHandler()
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTaskHandler}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}