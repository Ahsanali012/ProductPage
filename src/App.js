import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Layout from './components/layout/layout';


function App() {
  return (
  
      
        <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/products' element={<Products/>} />
        {/* <Route path ='*' element={<ErrorPage/>} /> */}
        </Routes>
        
   
  );
}

export default App;
