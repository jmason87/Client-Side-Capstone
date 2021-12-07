import React from "react"
import { useState, useEffect } from "react"

export const Desserts = () => {
    const [desserts, setDesserts] = useState([])

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
                desserts.map(
                    (dessert) => {
                        return <p key={`dessert--${dessert.id}`}>{dessert.name}</p>
                    }
                )
            }            
        </>
    )
}
