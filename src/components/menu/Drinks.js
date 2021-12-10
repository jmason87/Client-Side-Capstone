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
        <div className="display__items">
            {
                slicedDrinks.map(
                    (drink) => {
                        return <section key={`drink--${drink.id}`} className="menu__items">
                        <div>
                            {drink.name}
                        </div>
                        <div>
                            {drink.description}
                        </div>
                        <div>
                            {drink.price}
                        </div>
                    </section>
                    }
                )
            }
            </div>
        </>
    )
}