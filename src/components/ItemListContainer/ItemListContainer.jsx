import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then((response) => {
            setItems(response);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [categoryId])

    return(
        <>
            <ItemList items={items} isLoading={isLoading}/>
        </>
    )
}

export default ItemListcontainer;