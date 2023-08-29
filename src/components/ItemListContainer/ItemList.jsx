import React from 'react'
import propTypes from 'prop-types';
import { Link } from "react-router-dom"

const ItemList = ({items}) => {
  return (
    <div>
        <ul className='product-mat'>
            {items.map((item) => (
                <li key={item.id} className="">
                    <div className='card mod-card'>
                        <img src={item.img} className='card-img-top'/>
                        <div className='card-body'>
                            <Link to={`/item/${item.id}`}>
                                <h5 className='card-title'>{item.name}</h5>
                            </Link>
                            <p className='card-text'>{item.price}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
};

ItemList.propTypes = {
    list: propTypes.array.isRequired,
};

export default ItemList;
