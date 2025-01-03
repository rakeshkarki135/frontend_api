import {React} from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/logout">Logout</Link></li>
                <li><Link href="/create-studsent">Create-Student</Link></li>
            </ul>
        </header>
    )
}

export default Navbar