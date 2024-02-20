import React, {ChangeEvent, FC} from 'react'
import {Checkbox} from '@mui/material'

type MyCheckboxPropsType = {
    checked: boolean
    onChange: (newValue: boolean) => void
}


export const SuperCheckbox: FC<MyCheckboxPropsType> = (props) => {

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        props.onChange(e.currentTarget.checked)
    }


    return (
        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={onChangeHandler}
        />
    )
}





