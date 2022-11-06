import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="hamburger">
                    <FaBars size={25} style={{color: '#fff'}} />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/">Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;