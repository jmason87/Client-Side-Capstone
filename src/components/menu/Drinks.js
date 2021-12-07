import React from "react"
import { useState, useEffect } from "react"

export const Drinks = () => {
    const [drinks, setDrinks] = useState([])
    const slicedDrinks = drinks.slice(1)

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
            {
                slicedDrinks.map(
                    (drink) => {
                        return <p key={`drink--${drink.id}`}>{drink.name}</p>
                    }
                )
            }
        </>
    )
}