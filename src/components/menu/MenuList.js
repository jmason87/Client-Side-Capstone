import React from "react"
import { Link } from "react-router-dom"
import { Appetizers } from "./Appetizers"
import { Desserts } from "./Desserts"
import { Drinks } from "./Drinks"
import { Entrees } from "./Entrees"
import "./Menu.css"

export const MenuList = () => {
    return (
        <>
            <h1>Menu</h1>
            <div className="display__items">
                <Link to="/placeOrder"><button className="orderButton">Place Order</button></Link>
            </div>

            <div className="menuSections">
                <h2>Appetizers</h2>
                <Appetizers />
            </div>

            <div className="menuSections">
                <h2>Entrees</h2>
                <Entrees />
            </div>


            <div className="menuSections">
                <h2>Desserts</h2>
                <Desserts />
            </div>

            <div className="menuSections">
                <h2>Drinks</h2>
                <Drinks />
            </div>
        </>
    )
}