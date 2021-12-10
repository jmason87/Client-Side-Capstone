import React from "react"
import { useState, useEffect } from "react"

export const Desserts = () => {
    const [desserts, setDesserts] = useState([])
    const slicedDesserts = desserts.slice(1)

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

    return (
        <>
            <div className="display__items">
                {
                    slicedDesserts.map(
                        (dessert) => {
                            return <section key={`dessert--${dessert.id}`} className="menu__items">
                            <div>
                                {dessert.name}
                            </div>
                            <div>
                                {dessert.description}
                            </div>
                            <div>
                                {dessert.price}
                            </div>
                        </section>
                        }
                    )
                }
            </div>
        </>
    )
}
