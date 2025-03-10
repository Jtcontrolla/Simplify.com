import "../index.css"
import Logo from "../assets/Logo.svg"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-image">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Our Projects</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <a href="#">
                    <button>Contact Us</button>
                </a>
            </div>
        </nav>
    );
}