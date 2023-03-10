import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './components/layout/layout';
import ProductDetails from './pages/Products/ProductDetails';


function App() {
  return (
  
      
        <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/products' element={<Products/>} />
        <Route path ='/productDetails/:id' element={<ProductDetails/>} />
        {/* <Route path ='*' element={<ErrorPage/>} /> */}
        </Routes>
        
   
  );
}

export default App;
