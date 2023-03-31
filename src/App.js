import './App.css';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './views/Order';
import Payment from './views/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
