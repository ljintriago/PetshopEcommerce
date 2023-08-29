import React from 'react'
import propTypes from 'prop-types'

const ItemDetail = ({item}) => {
  if(!item){
    return null;
  }

  return (
    <div className='item-detail'>
      <h1>{item.name}</h1>
      <img src={item.img} alt="" />
      <p>Precio: {item.price}</p>
      <p>{item.description}</p>
    </div>
  )
}

ItemDetail.propTypes = {
  item: propTypes.object, 
}

export default ItemDetail;
