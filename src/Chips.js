import React from "react"
import { NavLink } from "react-router-dom"
import './Snack.css'

const Chips = () => {
    return (
    <>
        <h3>You ordered Chips!</h3>
        <NavLink exact to="/">Vending Machine!</NavLink>
    </>)
}

export default Chips