import React, {FC} from 'react'
import {PagesType} from '../../dataState/dataState'
import {useLocation, useParams} from 'react-router-dom'
import {Error404} from './Error404'


type PagePropType = {
    pages: Array<PagesType>
}


export const Page: FC<PagePropType> = (props) => {

    const params = useParams()

    const location = useLocation()
    // console.log(location)

    return (
        <>
            {location.pathname === '/page/0' && <div>Secret location</div>}

            {props.pages[Number(params.superId)]
                ?
                <>
                    {props.pages[Number(params.superId)].heading}
                    {props.pages[Number(params.superId)].about}
                </>
                :
                <Error404/>}
        </>


    )
}

export default Page