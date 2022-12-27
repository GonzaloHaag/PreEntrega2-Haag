import CartWidget  from "./CartWidget";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>El pocho Mates </h1>
            <a className="navbar__link" href="#">Productos</a>
            <a className="navbar__link" href="#">Categorias</a>
            <a className="navbar__link" href="#">Contacto</a>
            <CartWidget/>
        </nav>
        
    )
}

export default Navbar