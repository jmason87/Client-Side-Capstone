import React from "react"
import { useState, useEffect } from "react"

export const Appetizers = () => {
    const [appetizers, setApps] = useState([])
    const slicedApps = appetizers.slice(1)
    

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
                
                slicedApps.map(
                    (app) => {
                        return <p key={`app--${app.id}`}>{app.name}</p>
                    }
                )
            }
        </>
    )        
}