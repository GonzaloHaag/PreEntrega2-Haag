import { useEffect,useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productosApi,setProductosApi] = useState([]);
    const {category} = useParams();
    

    
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
       

    },[]); //Recordar [], para que solo se ejecute una vez

    const filtredProducts = productosApi.filter(product=>product.category===category);

    return(
        <div>
            <ItemList productosDeApi = {productosApi}/>
            <h1>Product List</h1>
            <ul>
                {filtredProducts.map(product=>{
                    <li key={product.id}>
                        {product.name}
                    </li>
                })}
            </ul>
            
        </div>
    );
    
};
export default ItemListContainer