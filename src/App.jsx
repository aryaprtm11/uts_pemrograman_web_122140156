import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import OrderMenu from './pages/order';
import Checkout from './pages/checkout';
import { CartProvider } from './pages/cart';
import CartPopup from './component/CartPopup';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderMenu />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <CartPopup />
      </Router>
    </CartProvider>
  );
};

export default App;