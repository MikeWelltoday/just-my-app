import {Navigate} from 'react-router-dom'
import {FC, ReactComponentElement} from 'react'

type PropsType = {
    children: ReactComponentElement<any>;
};

export const ProtectedRoute: FC<PropsType> = ({children}) => {
    // результат от сервера - true | false
    const logged = false

    return logged
        // если залогинен то к чилдренам, а если нет то в ошибки
        ? children : <Navigate to="/page/:error"/>
}