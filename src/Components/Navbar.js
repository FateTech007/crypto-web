import { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [showNavMenue, setShowNavMenue] = useState(false)


    const handleNavMenue = () => {
        setShowNavMenue(!showNavMenue)

    }

    return (
        <div className="header">
            {/* Logo */}
            <div className="container">
                <h1>De<span className="primary">Fi</span></h1>
                <ul className={showNavMenue ? "nav-menue active" : "nav-menue"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Feature</a></li>
                    <li><a href="/">Earn</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="btn-group">
                    <button className="btn">connect walllet</button>

                </div>
                <div className="hambuger" onClick={handleNavMenue}>
                    {
                        showNavMenue ? <FaTimes size={20} style={{ color: "#118c4f" }} /> : <FaBars size={20} style={{ color: "#118c4f" }} />
                    }

                </div>

            </div>
        </div>
    )
}

export default Navbar