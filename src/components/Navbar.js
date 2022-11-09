import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import logo from './images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMenu = () => {
        setClick(false)
    }

    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="hamburger" onClick={handleClick}>
                    { click ? (<FaTimes size={25} style={{
                        color: '#fff'
                    }} />) : <FaBars size={25} style={{color: '#fff'}} />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="#team" onClick={closeMenu}>Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;