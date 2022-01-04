import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    const [users, setUsers] =useState([])
    const userId = localStorage.getItem("pub_user")
    
    const [test, settest] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?id=${userId}`)
            .then(res => res.json())
            .then((data) => {
                setUsers(data)
            })
      
        },
        [userId]
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/entrees")
                .then(res => res.json())
                .then((data) => {
                    settest(data)
                })
        },
        []
    )

    return (

        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li >
            <li className="navbar__item active">
                <Link className="navbar__link" to="/menu">Menu</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/reviews/{${createdId}">Reviews</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("pub_user")
                    }
                }>  
                    {
                        users.map((user) => {
                            return `Logout ${user.name}`
                        })
                    }
                    </Link>
            </li>
        </ul>

    )
}
