import CartWidget  from "./CartWidget";
import {NavLink,Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className = "navbar">
            <Link to="/">
                <h1 className="navbar-title">LaloStore</h1>
            </Link>
            <NavLink className="navbar__link" to="/category/women's clothing">women's clothing</NavLink>
            <NavLink className="navbar__link" to="/category/electronics" >electronics</NavLink>
            <NavLink className="navbar__link" to="/category/men's clothing" >men's clothing</NavLink>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar