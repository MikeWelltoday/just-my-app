import React from 'react'
import './App.scss'
import {log} from 'node:util'

//======================================================================================================


//======================================================================================================

function App() {


    type CarType = {
        model: string
        year: number
        on: boolean
        turnOn: () => void
        rename: (model: string) => void
    }

    let car: CarType = {
        model: 'Reno',
        year: 2016,
        on: false,
        turnOn() {
            this.on = true
        },
        rename(model) {
            this.model = model
        }
    }

    type GarageType = {
        addCar: (car: CarType) => void
        logAllCarsNames: () => void
    }

    function createGarage(): GarageType {
        let _cars: Array<CarType> = []

        return {
            addCar(car) {
                _cars.push(car)
            },
            logAllCarsNames() {
                console.log('cars in the Garage')
                _cars.forEach(c => console.log())
            }
        }
    }


    return (
        <div className={'App'}>

        </div>
    )
}

export default App



