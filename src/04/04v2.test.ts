import {CityType} from './04.types'

let city: CityType

beforeEach(() => {

    city = {
        title: 'New York',
        houses: [
            {
                buildAt: 2012,
                required: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                buildAt: 2008,
                required: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                buildAt: 2020,
                required: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                address: {
                    number: 12,
                    street: {title: 'Central Str'}
                },
                budget: 200000,
                staffCount: 200
            },
            {
                type: 'FIRE-STATION',
                address: {
                    number: 12,
                    street: {title: 'South Str'}
                },
                budget: 500000,
                staffCount: 1000
            }
        ],
        citizensNumber: 1000000
    }
    
})