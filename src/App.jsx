import {NavLink, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Users from "./components/Users"
import Products from "./components/Products"
import Contacts from "./components/Contacts"

function App() {
  
  
  return (
    <div className="bg-blue-950 h-screen text-white pt-4">
       
       <nav className="max-w-screen-lg mx-auto px-6 py-3 text-2xl border flex justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
       </nav>


       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contacts />} />
       </Routes>
    </div>
  )
}

export default App