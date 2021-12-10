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
            <div className="display__items">
                {
                    slicedEntrees.map(
                        (entree) => {
                            return <section key={`entree--${entree.id}`} className="menu__items">
                                <div>
                                    {entree.name}
                                </div>
                                <div>
                                    {entree.description}
                                </div>
                                <div>
                                    {entree.price}
                                </div>
                            </section>
                        }
                    )
                }
            </div>
        </>
    )
}