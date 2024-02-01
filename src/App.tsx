import React from 'react'
import {NavLink, Route, Routes, Navigate} from 'react-router-dom'
import {PageOne} from './components/PageOne'
import {PageTwo} from './components/PageTwo'
import {PageThree} from './components/PageThree'
import './App.scss'

const PATH = {
    PAGE1: '/pageOne',
    PAGE2: '/pageTwo',
    PAGE3: '/pageThree'
} as const

function App() {
    return (
        <div className={'App'}>
            <nav>
                <NavLink to={PATH.PAGE1} className={({isActive}) => (isActive ? 'activated' : '')}>PageOne</NavLink>
                <NavLink to={PATH.PAGE2} className={({isActive}) => (isActive ? 'activated' : '')}>PageTwo</NavLink>
                <NavLink to={PATH.PAGE3} className={({isActive}) => (isActive ? 'activated' : '')}>PageThree</NavLink>
            </nav>
            <main>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                    <Route path={'/*'} element={<Navigate to={PATH.PAGE1}/>}/>

                    <Route path={PATH.PAGE1} element={<PageOne/>}/>
                    <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                    <Route path={PATH.PAGE3} element={<PageThree/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App

  



