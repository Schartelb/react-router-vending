import React from "react"
import { NavLink } from "react-router-dom"
import './Snack.css'

const Cookies = () => {
    return (
    <>
        <h3>You ordered Cookies!</h3>
        <NavLink exact to="/">Vending Machine!</NavLink>
    </>)
}

export default Cookies