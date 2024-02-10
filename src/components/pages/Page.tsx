import React from 'react'
import {PagesType} from '../../data/dataState'
import {Navigate, useLocation, useParams} from 'react-router-dom'
import {Error404} from './Error404'

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()

    const location = useLocation()
    console.log(location)

    return (
        <div>
            {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                </div>
                : <Navigate to={'/page/error'}/>
            }

        </div>
    )
}

