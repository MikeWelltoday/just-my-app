type HousesType = {
    buildAt: number
    required: boolean
    address: { number: number, street: { title: string } }
}

type GovernmentBuildingsType = {
    type: string
    address: { number: number, street: { title: string } }
    budget: number
    staffCount: number
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}