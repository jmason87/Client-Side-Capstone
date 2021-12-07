import React from "react"
import { Appetizers } from "./Appetizers"
import { Desserts } from "./Desserts"
import { Drinks } from "./Drinks"
import { Entrees } from "./Entrees"

export const MenuList = () => {
    return (
        <>
            <Appetizers />
            <Entrees />
            <Desserts />
            <Drinks />
        </>
    )
}