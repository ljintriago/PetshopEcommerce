import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Pet Shop</Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <NavLink className="nav-link active" to="/category/food" >Comida</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="nav-link active" to="/category/toys" >Juguetes</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="nav-link active" to="/category/clothes" >Ropa</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="nav-link active" to="/category/health">Higiene</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="nav-link active" to="/category/gadgets">Artículos</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="nav-link active">Salud</NavLink>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default Navbar