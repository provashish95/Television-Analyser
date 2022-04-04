import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  bg-navbar-color  py-4">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon icon-style"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto ">
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>Dashboard</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>About</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;