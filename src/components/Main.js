import ItemListContainer from "./ItemListContainer";
import {Route,Routes} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer";
const Main = () =>{
    return(
        <main>
            {/*Poner las rutas*/}
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>

        </main>
    )

}
export default Main