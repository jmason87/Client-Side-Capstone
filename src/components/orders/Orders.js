import React, { useEffect, useState } from "react"
import "./Orders.css"



export const Orders = () => {
    const [orders, setOrders] = useState([])
    const user = localStorage.getItem("pub_user")


    useEffect(
        () => {
            fetch(`http://localhost:8088/orders?_expand=appetizer&_expand=entree&_expand=dessert&_expand=drink&_expand=location&userId=${user}`)
                .then(res => res.json())
                .then((data) => {
                    setOrders(data)
                })
        },
        [user]
    )


    return (
        <>
            <h1>Orders</h1>
            <div className="orders">
                {
                    orders.map((order) => {

                        return <div key={`order--${order.id}`} className="orderCards">
                            <p>Order #{order.id} placed at the {order.location.neighborhood} location on {order.dateOrdered}:</p>
                            <ul>
                                <li>{order.appetizer.name}</li>
                                <li>{order.entree.name}</li>
                                <li>{order.dessert.name}</li>
                                <li>{order.drink.name}</li>
                            </ul>
                            <p>Total price: ${order.appetizer.price + order.entree.price + order.dessert.price + order.drink.price}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}