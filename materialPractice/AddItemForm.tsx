import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title)
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
            addItem()
        }
    }

    const styles = {
        button: {maxWidth: '39px', minWidth: '39px', maxHeight: '39px', minHeight: '39px', backgroundColor: 'black'}
    }

    return <div>
        <TextField value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}

                   error={!!error}

                   label={error ? error : 'put a new title'}
        />

        <IconButton onClick={addItem} color={'secondary'}>
            <AddCircleOutlineIcon/>
        </IconButton>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
