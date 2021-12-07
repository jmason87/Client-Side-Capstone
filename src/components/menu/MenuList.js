import React from "react"
import { Link } from "react-router-dom"
import { Appetizers } from "./Appetizers"
import { Desserts } from "./Desserts"
import { Drinks } from "./Drinks"
import { Entrees } from "./Entrees"

export const MenuList = () => {
    return (
        <>
            <h1>Menu</h1>
            <Link to="/placeOrder"><button>Place Order</button></Link>
            <Appetizers />
            <Entrees />
            <Desserts />
            <Drinks />
        </>
    )
}