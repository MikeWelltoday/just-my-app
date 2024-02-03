import React from 'react'
import styles from './Site.module.scss'
import {NavLink, Route, Routes, Navigate} from 'react-router-dom'
import {PageOne} from './pages/PageOne'
import {PageTwo} from './pages/PageTwo'
import {PageThree} from './pages/PageThree'
import {Error404} from './pages/Error404'
import {s} from './../styles/_styles'
import Page from './pages/Page'
import {dataState} from './../dataState/dataState'

const PATH = {
    PAGE1: '/pageOne',
    PAGE2: '/pageTwo',
    PAGE3: '/pageThree',
    ERROR: '/error'
} as const

export const Site = () => {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <s.NavWrapper>
                        <NavLink to={'/page/0'}>PageOne</NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink to={'/page/1'}>PageTwo</NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink to={'/page/2'}>PageThree</NavLink>
                    </s.NavWrapper>
                </div>
                <div className={styles.content}>


                    <Routes>
                        <Route path={'/page/:superId'} element={<Page pages={dataState.pages}/>}/>
                    </Routes>


                </div>
            </div>
        </div>
    )
}




