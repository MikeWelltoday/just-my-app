import React from 'react'
import s from './Form.module.scss'
import {useForm} from 'react-hook-form'

type FormData = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export const Form = () => {
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<FormData>()

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={'email'}>
                Email
            </label>
            <input
                id={'email'}
                type="email"
                autoComplete="email"
                {/*озвучим ошибвку с помощью скринридера*/}
                aria-describedby={'email-error-occurred'}
                {...register('email', {required: 'The field is required'})}
            />
            {errors.email &&
                <p className={s.error}
                   {/*озвучим ошибвку с помощью скринридера*/}
                   id={'email-error-occurred'}
                   aria-live={'assertive'}
                >
                    {errors.email.message}
                </p>
            }


            <label htmlFor={'password'}>Password</label>
            <input
                type="password"
                id={'password'}
                autoComplete="current-password"
                {...register('password', {
                    required: 'The field is required',
                    minLength: {value: 6, message: 'The field is too short'}
                })}
            />
            {errors.password && <p className={s.error}>{errors.password.message}</p>}


            <label>
                Remember Me
                <input type="checkbox" {...register('rememberMe', {required: 'The field is required'})} />
                {errors.rememberMe && <p className={s.error}>{errors.rememberMe.message}</p>}
            </label>

            <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
    )
}
