import {FilterValuesType} from './App'


type filterACType = ReturnType<typeof filterAC>


type filterReducerActionType = filterACType


export function filterAC(filter: FilterValuesType) {
    return {
        type: 'FILTER',
        payload: {
            filter
        } as const
    }
}


export const filterReducer = (state: FilterValuesType, action: filterReducerActionType): FilterValuesType => {

    switch (action.type) {

        case'FILTER': {
            if (action.payload.filter === 'active') {
                return 'active'
            }
            if (action.payload.filter === 'completed') {
                return 'completed'
            }
            return 'all'
        }

        default: {
            return state
        }

    }

}












