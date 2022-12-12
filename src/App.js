import './App.css';
import axios from 'axios';
import About from './pages/About'
import Index from './pages/Index'
import Expensive from './pages/Expensive.jsx'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [product,setProducts]=useState([])
  useEffect(() =>{
    const getProds= async () =>{

     await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
      
    }
      getProds();
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Index products={product}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/exp' element={<Expensive products={product}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
