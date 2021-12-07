import React from "react"
import { useState, useEffect } from "react"

export const Appetizers = () => {
    const [appetizers, setApps] = useState([])

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

    return (
        <>
            {
                appetizers.map(
                    (app) => {
                        return <p key={`app--${app.id}`}>{app.name}</p>
                    }
                )
            }
        </>
    )        
}