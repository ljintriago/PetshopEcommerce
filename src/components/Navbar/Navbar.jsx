import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Pet Shop</a>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Comida</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Juguetes</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Ropa</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Higiene</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Artículos</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Salud</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default Navbar