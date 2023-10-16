import React from 'react'
import { useContext, useState, useRef } from 'react'
import CartContext from '../../context/CartContext'
import { getCartTotal, mapCartToOrdderItems } from '../../utils';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../../services';
import Loader from '../Loader/Loader';
import Button from 'react-bootstrap/Button';

const CheckOut = () => {
    const [orderId, setOrderId] = useState(null);
    const { cart, clear } = useContext(CartContext);
    const { isLoading, setIsLoading} = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);


    const total = getCartTotal(cart);

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value
            },
            items: mapCartToOrdderItems(cart),
            total,
            date: serverTimestamp(),
        }

        setIsLoading(true);
        createOrder(order)
        .then((docRef) => {
            setOrderId(docRef.id); 
            setIsLoading(false);
            clear();
        });
    }

  return (
    <div>
        {orderId && <div className='vista-orden'>
            <h1>Su comprobante de compra es:</h1>
            <p>{orderId}</p>
        </div>}
        {!orderId && (
        <div className='vista-orden'>
            <h2>Resumen de la compra</h2>
            <div>
                <h4>Productos</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.key} className='check-items'>
                            <h5>{item.title}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio por unidad: ${item.price}</p>
                            <p>Subtotal: ${item.price * item.quantity}</p>
                            <hr></hr>
                        </li>
                    ))}
                </ul>
                <h5 className='total'>Total de la compra: ${total}</h5>
            </div>
            <div className='formulario-cliente'>
                <h4>Formulario de contacto</h4>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="name" required ref={nameRef}/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required ref={emailRef}/>
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Celular:</label>
                        <input type="tel" class="form-control" id="telefono" required ref={phoneRef}/>
                    </div>
                </form>
            </div>

            <Button variant='danger' onClick={handleCheckout}>Finalizar compra</Button>
            {isLoading && <Loader/>}
        </div>
        )}
        
    </div>
  )
}

export default CheckOut