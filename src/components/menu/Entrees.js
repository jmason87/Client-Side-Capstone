import React from "react"
import { useState, useEffect } from "react"

export const Entrees = () => {
    const [entrees, setEntrees] = useState([])
    const slicedEntrees = entrees.slice(1)

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

    return (
        <>
            {
                slicedEntrees.map(
                    (entree) => {
                        return <p key={`entree--${entree.id}`}>{entree.name}</p>
                    }
                )
            }
        </>
    )
}