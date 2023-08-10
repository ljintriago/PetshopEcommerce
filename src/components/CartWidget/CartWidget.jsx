const CartWidget = () => {
    return(
        <>
            <div>
                <button className="btn btn-out primary position-relative">
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-0 start-100 transalte-middle badge rounded-pill bg-danger">
                        3
                        <span className="visually-hidden">articulos en carrito</span>
                    </span>
                </button>
            </div>
        </>
    )
}

export default CartWidget;