import React from 'react'
import propTypes from 'prop-types'
import Loader from '../Loader/Loader';

const ItemDetail = ({item, isLoading, addItem}) => {
  if (isLoading) {
    return <Loader/>
  }

  if(!item){
    return <div className='centered-message'><h2>Producto no encontrado</h2></div>;
  }

  return (
    <>
      <div className='item-detail'>
        <img className='detail-img' src={item.imageId} alt="" />
        <div>
          <h1>{item.title}</h1>
          <hr></hr>
          <p>{item.description}</p>
          <p>Stock: {item.stock}</p>
          <p className='precio'>Precio: ${item.price}</p>
          <div><button type='button' className='btn btn-danger' onClick={() => addItem(item, 1)}>Agregar al Carrito</button></div>
        </div>
      </div>
    </>
  )
};

ItemDetail.propTypes = {
  item: propTypes.object, 
};

export default ItemDetail;
