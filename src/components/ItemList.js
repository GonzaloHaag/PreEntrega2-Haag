import Item from "./Item";

const ItemList = ({productosDeApi}) =>{
    return(
        <div className="products-container">
            {productosDeApi.map((producto)=>{
                return(
                    <Item producto = {producto} key={producto.id}/>
                )
            })}
        </div>

    )
}

export default ItemList