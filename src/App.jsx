import Navbar from "./components/Navbar/Navbar"
import ItemListcontainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListcontainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListcontainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
