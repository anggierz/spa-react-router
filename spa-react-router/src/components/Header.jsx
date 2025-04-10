import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <h1>My React Router App</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/posts">Blog</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}