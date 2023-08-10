import Navbar from "./components/Navbar/Navbar"
import ItemListcontainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <>
      <div>
        <Navbar/>

        <ItemListcontainer greeting = "Bienvenidos"/>
      </div>
    </>
  )
}

export default App
