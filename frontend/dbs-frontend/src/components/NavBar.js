import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <span class="navbar-text">
                            Welcome, John Doe
                        </span>
                        <li className="nav-item align-self-end">
                            <Link to='/' className="nav-link">View All</Link>
        
                            <button class="btn btn-outline-primary">Log out</button>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar