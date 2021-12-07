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
            {
                slicedDesserts.map(
                    (dessert) => {
                        return <p key={`dessert--${dessert.id}`}>{dessert.name}</p>
                    }
                )
            }            
        </>
    )
}
