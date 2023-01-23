import React from 'react'

const ItemDetail = ({productoApi}) => {
  return (
    <div>
        <h3>Detalle de: {productoApi.title}</h3>
        <img src={`https://picsum.photos/200/300?random=${productoApi.id}`} alt={productoApi.title}/>
        <p>{"$" + productoApi.price}</p>
    </div>
  )
}

export default ItemDetail