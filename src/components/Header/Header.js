import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
    <div className='header-container'>
        <div className='container row mt-1 ms-5 '>
            <div className='col-md-6 '>
                <h2 className='mt-2 title'>WorldWide Science</h2>
            </div>

            <div className='col-md-6 '>
                <nav className='navBar'>
                    <NavLink className="link"  to='/home'>
                        Home
                    </NavLink>
                    <NavLink className="link"  to='/services'>
                        Services
                    </NavLink>
                    <NavLink className="link"  to='/about'>
                        About
                    </NavLink>
                    <NavLink className="link"  to='/teachers'>
                        Teachers
                    </NavLink>
                </nav>
            </div>

        </div>
    </div>
    );
};

export default Header;