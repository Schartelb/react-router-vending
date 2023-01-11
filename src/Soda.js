import React from "react"
import { NavLink } from "react-router-dom"
import './Snack.css'

const Soda = () => {
    return (
    <>
        <h3>You ordered Soda!</h3>
        <NavLink exact to="/">Vending Machine!</NavLink>
    </>)
}

export default Soda