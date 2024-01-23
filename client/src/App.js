import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register/page";
import Login from "./pages/Auth/Login/page";
import Products from "./pages/Products/page";
import Cart from "./pages/cart/page";
import "./App.css";
import { AuthProvider } from "./context/auth";

function Profile() {
  return (
    <div>
      <h1>this is the profile page</h1>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
