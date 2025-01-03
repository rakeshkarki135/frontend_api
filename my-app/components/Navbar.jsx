import { Link } from 'react-router-dom'
import '../src/styles/navbar.css'

function Navbar() {
    return (
        <>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/student">Create-Student</Link></li>
            </ul>
        </header>
        </>
    )
}

export default Navbar