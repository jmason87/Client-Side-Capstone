import React from "react"
import { Route } from "react-router"
import { Home } from "./home/Home"
import { LocationList } from "./locations/LocationList"
import { MenuList } from "./menu/MenuList"
import { OrderForm } from "./orders/OrderForm"
import { Orders } from "./orders/Orders"
import { Reviews } from "./reviews/Reviews"

export const ApplicationViews = () => {
    return (
        <>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/locations">
            <LocationList />
        </Route>
        <Route path="/menu">
            <MenuList />
        </Route>
        <Route path="/orders">
            <Orders />
        </Route>
        <Route path="/reviews">
            <Reviews />
        </Route>
        <Route path="/placeOrder">
            <OrderForm />
        </Route>
        </>
    )
}