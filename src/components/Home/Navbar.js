import React from 'react'

export const Navbar = () => {
    return (
        <navbar>
            <div id="nav-left">
                <h3 id="nav-brand">EXAM SOLUTION</h3>
            </div>
            <div id="nav-right">
                <ul id="nav-list">
                    <li id="nav-item">Home</li>
                    <li id="nav-item">About Us</li>
                    <li id="nav-item">Tutorials</li>
                    <li id="nav-item">Contact</li>
                    <li className="nav-item">
                        <a href="" id="btn-block">SignUp</a>
                    </li>
                </ul>
            </div>   
        </navbar>
    )
}

export default Navbar