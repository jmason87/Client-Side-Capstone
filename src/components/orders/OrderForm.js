import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const OrderForm = () => {
    const [appetizers, setApps] = useState([])
    const [entrees, setEntrees] = useState([])
    const [desserts, setDesserts] = useState([])
    const [drinks, setDrinks] = useState([])
    const [locations, setLocations] = useState([])
    const [order, setOrder] = useState({
        locationId: 0,
        appetizerId: 0,
        entreeId: 0,
        dessertId: 0,
        drinkId: 0,
    })
    const history = useHistory()

    const submitNewOrder = (evt) => {
        evt.preventDefault()
        const date = new Date
        const newOrder = {
            locationId: parseInt(order.locationId),
            appetizerId: parseInt(order.appetizerId),
            entreeId: parseInt(order.entreeId),
            dessertId: parseInt(order.dessertId),
            drinkId: parseInt(order.drinkId),
            userId: parseInt(localStorage.getItem("pub_user")),
            dateOrdered: date.toDateString()

        }
        if (newOrder.locationId === 0) {
            window.alert("Please select a location")
        } else
        if (newOrder.appetizerId === 0) {
            window.alert("Please select an appetizer")
        } else
        if (newOrder.entreeId === 0) {
            window.alert("Please select an entree")
        } else
        if (newOrder.dessertId === 0) {
            window.alert("Please select an dessert")
        } else
        if (newOrder.drinkId === 0) {
            window.alert("Please select an drink")
        } else {

        const fetchOption = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        }

        return fetch("http://localhost:8088/orders", fetchOption)
            .then(res => res.json())
            .then(() => {
                history.push("/orders")
            })
    }}

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/appetizers")
                .then(res => res.json())
                .then((data) => {
                    setApps(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/entrees")
                .then(res => res.json())
                .then((data) => {
                    setEntrees(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/desserts")
                .then(res => res.json())
                .then((data) => {
                    setDesserts(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/drinks")
                .then(res => res.json())
                .then((data) => {
                    setDrinks(data)
                })
        },
        []
    )

    return (
        <>
            <h1>Place an Order</h1>
            <h2>Location</h2>
            <select
                onChange={
                    (evt) => {
                        const copy = { ...order }
                        copy.locationId = evt.target.value
                        setOrder(copy)
                    }
                }>
                <option value={0} >Select a Location</option>
                {
                    locations.map(location => {
                        return <option key={location.id} value={location.id}>{location.neighborhood}</option>
                    })
                }
            </select>

            <h2>Appetizers</h2>
            {
                appetizers.map(
                    (app) => {
                        return <p key={`app--${app.id}`}>
                            <input
                                type="radio"
                                name="app"
                                value={app.id}
                                onChange={
                                    (evt) => {
                                        const copy = { ...order }
                                        copy.appetizerId = evt.target.value
                                        setOrder(copy)
                                    }
                                } />{app.name}</p>
                    }
                )
            }

            <h2>Entrees</h2>
            {
                entrees.map(
                    (entree) => {
                        return <p key={`entree--${entree.id}`}>
                            <input
                                type="radio"
                                name="entree"
                                value={entree.id}
                                onChange={
                                    (evt) => {
                                        const copy = { ...order }
                                        copy.entreeId = evt.target.value
                                        setOrder(copy)

                                    }
                                } />{entree.name}</p>
                    }
                )
            }


            <h2>Desserts</h2>
            {
                desserts.map(
                    (dessert) => {
                        return <p key={`dessert--${dessert.id}`}>
                            <input
                                type="radio"
                                name="dessert"
                                value={dessert.id}
                                onChange={
                                    (evt) => {
                                        const copy = { ...order }
                                        copy.dessertId = evt.target.value
                                        setOrder(copy)
                                    }
                                } />{dessert.name}</p>
                    }
                )
            }

            <h2>Drinks</h2>
            {
                drinks.map(
                    (drink) => {
                        return <p key={`drink--${drink.id}`}>
                            <input
                                type="radio"
                                name="drink"
                                value={drink.id}
                                onChange={
                                    (evt) => {
                                        const copy = { ...order }
                                        copy.drinkId = evt.target.value
                                        setOrder(copy)
                                    }
                                } />{drink.name}</p>
                    }
                )
            }
            <button onClick={submitNewOrder}>Submit Order</button>
        </>
    )
}