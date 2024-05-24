import React from 'react'
import {useForm} from 'react-hook-form'

import s from './Form.module.scss'

type FormValues = {
    userName: string
    email: string
    channel: string
}


export const From = () => {

    const {register, handleSubmit} = useForm<FormValues>()

    function onSubmit(data: FormValues) {
        console.log(data)
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="userName">UserName</label>
            <input
                id="userName" type={'text'}
                {...register('userName')}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email" type={'email'}
                {...register('email')}
            />

            <label htmlFor={'channel'}>Channel</label>
            <input
                id={'channel'} type={'text'}
                {...register('channel')}
            />
        </form>
    )
}