import React, { useState, useEffect } from "react";
// import { useUserContext } from "../ctx/UserContext";

const Header = () => {
    // const {currUser, logout} = useUserContext()

    return(
        <div>
            <ul>
                <li className="nav-item">
                <a className="nav-link" href="/signup">Signup Page</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/login">Login Page</a>
                </li>
            </ul>
        </div>
    )
}

export default Header