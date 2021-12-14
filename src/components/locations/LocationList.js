import React from "react"
import { useState, useEffect } from "react"
import "./Locations.css"


export const LocationList = () => {
    const [locations, setLocations] = useState([])

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

    return (
        <>
            <h1>Locations</h1>
            <div className="Loc">
            
            {
                
                locations.map(
                    (location) => {
                        return <section key={`location--${location.id}`}className="Loc1" > 
                                    <div>
                                        
                                    </div>               
                                    <div>
                                        {location.neighborhood}
                                    </div>
                                    <div>
                                        Address: {location.address}     
                                    </div>
                                    <div>
                                        Phone: {location.phone}
                                    </div>
                                </section>
                    
                    }
                )
            }
            </div>
        </>
    )
}