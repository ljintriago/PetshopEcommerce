import { useContext, useRef, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils"
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Overlay from 'react-bootstrap/Overlay';

const CartWidget = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const { cart } = useContext(CartContext);
    const quantity = getCartQuantity(cart);
    const navigate = useNavigate();
    
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Productos en el carrito</Popover.Header>
          <Popover.Body>
            <ListGroup>
                {cart.map((item) => (
                    <ListGroup.Item key={item.key}>
                        <p>{item.title} x {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div>
            <Button variant="warning" size="sm" onClick={() => {navigate("/carrito");
                                                               setShow(false) }}>
                Ver carrito
            </Button>{' '}
            <Button variant="danger" size="sm" onClick={() => {navigate("/checkout");
                                                               setShow(false) }}>
                Ir a checkout
            </Button>
            </div>
          </Popover.Body>
        </Popover>
      );      

      const handleShow = (event) => {
        setShow(!show);
        setTarget(event.target);
      };

    return(
        
            <div className="cart-container" ref={ref}>
                <button type="button" className="btn btn-out" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-placement="bottom" onClick={handleShow}>
                    <i className="bi bi-cart"></i>
                    <span className="top-0 start-101 transalte-middle badge rounded-pill bg-danger">
                        { quantity > 0 ? quantity : null }
                    </span>
                </button>
                <Overlay placement="bottom" show={show} target={target} container={ref} containerPadding={20}>
                    {quantity > 0 ? popover : <Popover><Popover.Body>No se ha seleccionado ningún producto</Popover.Body></Popover>}
                </Overlay>
            </div>
    )
}

export default CartWidget;