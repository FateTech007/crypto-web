import react from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    return (
        <div className="header">
            {/* Logo */}
            <div className="container">
                <h1>De<span className="primary">Fi</span></h1>
                <ul className="nav-menue">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Feature</a></li>
                    <li><a href="/">Earn</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="btn-group">
                    <button className="btn">connect walllet</button>

                </div>
                <div className="hambuger">
                    <FaBars />
                </div>

            </div>
        </div>
    )
}

export default Navbar