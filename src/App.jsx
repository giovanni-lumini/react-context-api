import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import PizzaList from "./pages/PizzaList"
import SinglePizza from "./pages/SinglePizza"
/* context */
import ApiContext from "./context/ApiContext"

import './App.css'

function App() {

  const url = "http://127.0.0.1:3000/pizze";

  return (
    <>
      <ApiContext.Provider value={{ url }}>

        <BrowserRouter>
          {/* routes here */}
          <Routes>

            <Route element={<DefaultLayout />} >
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pizza-list" element={<PizzaList />} />
              <Route path="/pizza-list/:id" element={<SinglePizza />} />
            </Route>
          </Routes>
        </BrowserRouter >

      </ApiContext.Provider >
    </>
  )
}

export default App




