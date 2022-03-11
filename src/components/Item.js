import React from 'react'

const Item = ({item}) => {
  return (
    <div className="itemStyle">
    <h1>{item.title}</h1>
    <img src={item.image} alt={item.title}></img>
    <h3>{item.category}</h3>
    <h4>{item.company}</h4>
    <p>{item.descriptionShort}</p>
    </div>
  )
}

export default Item