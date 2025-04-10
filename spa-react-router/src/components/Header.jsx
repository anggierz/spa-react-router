import { NavLink } from "react-router";
import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <h1>MovieDB</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}