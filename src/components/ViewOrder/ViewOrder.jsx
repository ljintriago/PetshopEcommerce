import React from 'react'
import { useContext, useState, useRef } from 'react'
import CartContext from '../../context/CartContext'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ViewOrder = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

  return (
    <div className='vista-orden'>
        <h1>Productos seleccionados</h1>
        <div>
            <ul>
                {cart.map((item) => (
                    <li key={item.key} className='detalle-vista-orden'>
                        <h5>{item.title}&nbsp;&nbsp;</h5>
                        <p>Cantidad: {item.quantity}&nbsp;&nbsp;Precio por unidad: ${item.price}&nbsp;&nbsp;Subtotal: ${item.price * item.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
        <Button variant="danger" onClick={() => navigate("/checkout")}>
            Ir a checkout
        </Button>
    </div>
  )
}

export default ViewOrder