import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/js/main.js'
import DisplayProduct from './components/DisplayProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:id' element={<DisplayProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
