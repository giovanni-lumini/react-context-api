import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import PizzaList from "./pages/PizzaList"
import SinglePizza from "./pages/SinglePizza"

import './App.css'

function App() {
  return (
    <>
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
      </BrowserRouter>
    </>
  )
}

export default App




