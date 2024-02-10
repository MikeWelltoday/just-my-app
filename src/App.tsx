import React, {useEffect, useState} from 'react'
import './App.css'
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom'
import styles from './components/Site.module.css'
import {S} from './components/pages/__styles'
import {useWindowSize} from './hooks_OR_helpers/useWindowSize'

function App() {


    // BACK BUTTON
    const navigate = useNavigate()

    function onClickHandler() {
        navigate(-1)
    }

    // MENU BURGER
    const windowSize = useWindowSize()

    return (
        <div>
            <div>
                <div className={styles.header}><h1>HEADER</h1></div>
                <div className={styles.body}>
                    {!(windowSize < 1000) ?
                        <div className={styles.nav}>
                            <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                            <div><a href="/page1">aHrefPage1</a></div>
                        </div>
                        :
                        <div>NO</div>}

                    <div className={styles.content}>
                        {/* ДИНАМИЧНАЯ ЧАСТЬ */}
                        <Outlet/>
                    </div>
                </div>

                {/* кнопка возварата */}
                <Link className={styles.buttonLink} to={'/page/0'}>ГЛАВНАЯ СТРАНИЦА</Link>

                {/*  BACK  */}
                <button className={styles.buttonLink} onClick={onClickHandler}>НАЗАД</button>

            </div>
        </div>
    )
}

export default App
