import React, {ChangeEvent, FC, useState} from 'react'

type EditableSpanPropsType = {
    children: string
    changeTaskTitle: (title: string) => void
}

export const EditableSpan: FC<EditableSpanPropsType> = (props) => {

    const [changeMode, setChangeMode] = useState(false)
    const [newTitle, setNewTitle] = useState(props.children)

    function onChangeTitleHandler(e: ChangeEvent<HTMLInputElement>) {
        setNewTitle(e.currentTarget.value)
    }

    function changeModeHandler() {
        setChangeMode(!changeMode)
    }

    function changeModeDisable() {
        changeModeHandler()
        if (newTitle.trim()) {
            props.changeTaskTitle(newTitle.trim())
        } else {
            setNewTitle(props.children)
        }
    }


    return (

        !changeMode ?
            <span onDoubleClick={changeModeHandler}>
                {props.children}</span>
            :
            <input type="text"
                   value={newTitle}
                   onChange={onChangeTitleHandler}
                   onBlur={changeModeDisable}
                   autoFocus
            />

    )
}