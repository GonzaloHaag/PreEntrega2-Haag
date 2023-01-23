import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail  from './ItemDetail';

const ItemDetailContainer = (producto) => {
  const[productoApi,setProductoApi] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado=>{
      setProductoApi(resultado)
    })
  },[id]);
  console.log(productoApi);

  return(
      <div>
        <ItemDetail productoApi={productoApi}/>
      </div>
  )
}

export default ItemDetailContainer