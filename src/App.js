import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import './assets/css/slick.css';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
