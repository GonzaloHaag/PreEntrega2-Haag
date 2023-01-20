import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return( //En cada vuelta del .map me va a retornar esto
        <article className="product-container" key={producto.id}>
            <h3>{producto.title}</h3>
            <img src={`https://picsum.photos/200/300?random=${producto.id}`} alt={producto.title}/> {/*Genera imagenes randoms*/}
            <p>{"$" + producto.price}</p>

            <Link to={"/item/" + producto.id}>Ver Mas</Link>{/*Es como un href*/}

        </article>
    )

    

}

export default Item;