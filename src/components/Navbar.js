import CartWidget  from "./CartWidget";
import {NavLink,Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className = "navbar">
            <Link to="/">
                <h1 className="navbar-title">LaloStore</h1>
            </Link>
            <NavLink className="navbar__link" to="/category/:categoryId">Productos</NavLink>
            <NavLink className="navbar__link" to="/category/:categoryId" >Categorias</NavLink>
            <NavLink className="navbar__link" to="/category/:categoryId" >Contacto</NavLink>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar