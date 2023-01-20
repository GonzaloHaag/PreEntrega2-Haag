import { useEffect,useState } from "react"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productosApi,setProductosApi] = useState([]);

    
    useEffect(()=>{

        const pedidoProductos = fetch('https://fakestoreapi.com/products'); 

        pedidoProductos.then((respuesta)=>{
            const productos = respuesta.json();
            console.log(productos); //Array de 20 productos
            return productos
        })
        .then((productos)=>{
            console.log(productos);
            setProductosApi(productos);

        })
       

    },[]) //Recordar [], para que solo se ejecute una vez

    return(
        <div>
            <ItemList productosDeApi = {productosApi}/>
        </div>
    )
    
}
export default ItemListContainer