// src/App.js
import "./App.css";
import User from "./getUser/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Update from "./updateuser/Update";
import AddUser from "./addUser/AddUser";
import DeleteUser from "./deleteUser/DeleteUser";
import Login from "./login/Login";
import Splash from "./Splash/Splash";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bids" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
