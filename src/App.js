import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/js/main.js'
import DisplayProduct from './components/DisplayProduct';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:id' element={<DisplayProduct/>}/>
        <Route path='/mycart' element={<Cart/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
