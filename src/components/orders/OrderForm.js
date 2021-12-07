import React, { useEffect, useState } from "react"

export const OrderForm = () => {
    const [appetizers, setApps] = useState([])
    const [entrees, setEntrees] = useState([])
    const [desserts, setDesserts] = useState([])
    const [drinks, setDrinks] = useState([])

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

            <h2>Appetizers</h2>
                {
                    appetizers.map(
                        (app) => {
                            return <p key={`app--${app.id}`}>
                                <input type="radio" name="app" />{app.name}</p>
                        }
                    )
                }
            
            <h2>Entrees</h2>
                {
                    entrees.map(
                        (entree) => {
                            return <p key={`entree--${entree.id}`}><input type="radio" name="entree" />{entree.name}</p>
                        }
                    )
                }
            

            <h2>Desserts</h2>
                {
                    desserts.map(
                        (dessert) => {
                            return <p key={`dessert--${dessert.id}`}><input type="radio" name="dessert" />{dessert.name}</p>
                        }
                    )
                }

            <h2>Drinks</h2>
                {
                    drinks.map(
                        (drink) => {
                            return <p key={`drink--${drink.id}`}><input type="radio" name="drink" />{drink.name}</p>
                        }
                    )
                }
        </>
    )
}