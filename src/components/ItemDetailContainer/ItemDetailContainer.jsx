import { useState, useEffect, useContext } from 'react'
import { getProduct } from '../../services'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import CartContext from '../../context/CartContext'

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProduct(id)
    .then((response) => {
      setItem(response)
    }).catch(() => {
      setItem(null);
    })
    .finally(() => {
      setIsLoading(false);
    });
  },[id])


  return (
    <ItemDetail item={item} isLoading={isLoading} addItem={addItem}/>
  )
}

export default ItemDetailContainer;
