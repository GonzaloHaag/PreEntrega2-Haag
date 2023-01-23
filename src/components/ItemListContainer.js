import { useEffect,useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productosApi,setProductosApi] = useState([]);
    const{id} = useParams();
   
   
   

    
    useEffect(()=>{

        // const pedidoProductos = fetch('https://fakestoreapi.com/products'); 
      
       

        // pedidoProductos.then((respuesta)=>{
        //     const productos = respuesta.json();
        //     console.log(productos); //Array de 20 productos
            
        //     return productos
        // })
      
        // .then((productos)=>{
        //     console.log(productos);
        //     setProductosApi(productos);

        // })
        const url = "https://fakestoreapi.com/products";
        fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>{
            setProductosApi([]) //Limpia memoria de los productos que tenia antes
            if(id===undefined) {
                setProductosApi(resultado)
            }
            else{
                setProductosApi(resultado.filter((producto)=> producto.category === id))
            }
        })
       

    },[id]); //Recordar [], para que solo se ejecute una vez

    

    return(
        <div>
            <ItemList productosDeApi = {productosApi}/>
            {/* <h1>Product List</h1> */}
            
        </div>
    );
    
};
export default ItemListContainer