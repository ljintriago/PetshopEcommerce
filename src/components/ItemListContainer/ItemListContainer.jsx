import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then((response) => {
            setItems(response);
        });
    }, [categoryId])

    return(
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListcontainer;