import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
  return (
    <div className="itemDetailStyle">
    <h1 className='itemDetailElement'>{item.title}</h1>
    <img className='itemDetailElement' src={item.image} alt={item.title}></img>
    <h3 className='itemDetailElement'>{item.category}</h3>
    <h4 className='itemDetailElement'>{item.company}</h4>
    <p className='itemDetailElement'>{item.descriptionLong}</p>
    <ItemCount stock={item.stock} initial={1}/>
    </div>
  )
}

export default ItemDetail