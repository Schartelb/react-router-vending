import { NavLink } from "react-router-dom";
import React from "react"

const VendingMachine = () => {
    return (
        <>
            <h2>Hello! What would you like?</h2>
            <NavLink exact to="/chips">Buy Potato Chips!</NavLink>
            <NavLink exact to="/cookies">Grab Cookies!</NavLink>
            <NavLink exact to="/soda">Get a Soda!</NavLink>
        </>)
}
export default VendingMachine;