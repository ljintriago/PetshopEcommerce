import Navbar from "./components/Navbar/Navbar"
import ItemListcontainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {Routes, Route} from "react-router-dom"
import CartProvider from "./context/CartProvider"
import CheckOut from "./components/CheckOut/CheckOut"
import ViewOrder from "./components/ViewOrder/ViewOrder"

function App() {

  return (
    <>
      <CartProvider>
        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListcontainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListcontainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/carrito" element={<ViewOrder/>}/>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
