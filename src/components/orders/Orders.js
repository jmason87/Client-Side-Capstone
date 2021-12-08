import React, { useEffect, useState } from "react"



export const Orders = () => {
    const [orders, setOrders] = useState([])
    const user = localStorage.getItem("pub_user")

    
    useEffect(
        () => {
            fetch(`http://localhost:8088/orders?_expand=appetizer&_expand=entree&_expand=dessert&_expand=drink&userId=${user}`)
            .then(res => res.json())
            .then((data) => {
                setOrders(data)
            })
        },
        []
    )
    
    
    return (
        <>
        <h1>Orders</h1>
        {
            orders.map((order) => {
                
                 return <div key={`order--${order.id}`}>
                     <p>Order #{order.id} placed on {order.dateOrdered}:</p>
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
        </>
    )
}