import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

//===============================================================================================================================================================

import {splitIntoWords, value01_01} from './01-hello-tests/01'

let a = value01_01

const sentence = 'Hello my dear friend!'


const result = splitIntoWords(sentence)
console.log(result)


//===============================================================================================================================================================

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
