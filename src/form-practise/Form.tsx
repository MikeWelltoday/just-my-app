import React from 'react'
import {useForm} from 'react-hook-form'

import s from './Form.module.scss'
import {DevTool} from '@hookform/devtools'

type FormValues = {
    userName: string
    email: string
    channel: string
}

let renderCount = 0

export const Form = () => {

    const {register, handleSubmit, control} = useForm<FormValues>()

    function onSubmit(data: FormValues) {
        console.log(data)
    }

    renderCount++

    return (
        <>
            <h1>COUNT: {renderCount}</h1>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="userName">UserName</label>
                <input
                    id="userName" type={'text'}
                    {...register('userName', {
                        required: {
                            value: true,
                            message: 'UserName is required'
                        }
                    })}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email" type={'email'}
                    {...register('email', {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                />

                <label htmlFor={'channel'}>Channel</label>
                <input
                    id={'channel'} type={'text'}
                    {...register('channel')}
                />

                <button type={'submit'}>SUBMIT</button>
            </form>
            <DevTool control={control}/>
        </>
    )
}