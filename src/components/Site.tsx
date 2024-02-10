import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./pages/Error404";
import {S}  from  './pages/__styles'
import styled from "styled-components";
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                    <S.NavWrapper><NavLink  to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                    <div><a href="/page1">aHrefPage1</a></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/*'} element={<Error404/>}/>*/}
                        <Route path={'/page/error'} element={<Error404 />} />
                        <Route path={'/*'} element={<Navigate to={'/page/error'} />}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
};

// const NavWrapper = styled.div`
//   margin-left: 10px;
//   font-size: 20px;
//
//   & > a {
//     text-decoration: none;
//     color: #1e3786;
//   }
//
//   & > a.active {
//     text-decoration: none;
//     color: #03eaff;
//   }
//
//   & > a:hover {
//     color: steelblue; /* Цвет ссылки */
//   }
// `
