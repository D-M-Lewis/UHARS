import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import MobileMenu from '../components/MobileMenu'

const Header = () => {
    //declaring on / off for mobile menu
    const [menuIsOpen, openMenu] = useState(false);

    // toggle openMenu state - on / off
    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }

    if (menuIsOpen) {

    }

    return (
        <>
            <div id='topnav'>
                {/* Desktop Menu, which only appears on large screens */}
                <div className="logo__box">
                    <Link to="/"><img className="logo__image" src="public/logo.png" alt="Cat with large heart logo" /></Link>
                </div>
                <div className="menu">
                    <ul id='menu'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/shop" ><span className='menu-donate'>Donate</span></Link>
                        </li>
                    </ul>
                </div>
                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>
            </div>

            {/* if menuIsOpen is true, show moile menu */}
            {/* gives the mobile menu close  */}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
            {/* If menuIsOpen, show the close button */}

        </>
    )
}

export default Header