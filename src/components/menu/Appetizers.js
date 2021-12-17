import React from "react"
import { useState, useEffect } from "react"
import "./Menu.css"

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
            <div className="display__items">
                {

                    slicedApps.map(
                        (app) => {
                            return <section key={`app--${app.id}`} className="menu__items">
                                <div>
                                    <b>{app.name}</b>
                                </div>
                                <div>
                                    <em>{app.description}</em>
                                </div>
                                <div>
                                    ${app.price}
                                </div>
                            </section>
                        }
                    )
                }
            </div>
        </>
    )
}