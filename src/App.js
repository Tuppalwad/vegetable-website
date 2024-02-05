import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Home/Homepage";
import Shop from "./component/Shop/Shop";
import Contactt from "./component/Contact/Contactt";
import Blog from "./component/Blog/Blog";
import ProductDetail from "./component/Pages/ProductDetail";
import Register from "./component/Autho/Register";
import Login from "./component/Autho/Login";
import BlogDetail from "./component/Pages/BlogDetail";
import Checkout from "./component/Pages/Checkout";
import ShoppingCart from "./component/Pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Contact" element={<Contactt />} />
          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/ProductDetail"
            element={<ProductDetail></ProductDetail>}
          />
          <Route path="/BLogdetail" element={<BlogDetail />} />
          <Route path="/Shopcart" element={<ShoppingCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Register" element={<Register></Register>} />
          <Route path="/Login" element={<Login></Login>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
