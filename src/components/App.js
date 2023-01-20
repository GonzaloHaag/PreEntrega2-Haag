
import Navbar from "./Navbar"; 
import ItemListContainer from "./ItemListContainer";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Main from "./Main"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    {/* <ItemListContainer greeting = "BIENVENIDO AL POCHO MATES,EMPRESA DEDICADA A LA VENTA DE MATES Y ACCESORIOS PERSONALIZADOS"/> */}
    <Main/>
   
    </BrowserRouter>
  )
 
  
}

export default App;
