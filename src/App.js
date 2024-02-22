import './App.css'
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './mobile/Home';
import Products from './mobile/Products';
import ProductDisplay from './mobile/ProductDisplay';
import State from './Hooks/State';
import Lifecycle from './pages/LifeCycle';
import Effect from './Hooks/Effect';
import Reducer from './Hooks/Reducer';
import ContextHome from './Context/ContextHome';
import Vote from './condition/Vote';
import { useState } from 'react';
import Login from './condition/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './bcss/Navs';


function App() {
  

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name="HOMEPAGE"/>}/>
        <Route path="/cart" element={<Cart name="CART_PAGE"/>}/>
      </Routes>
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDisplay/>} />
      </Routes>
    </BrowserRouter>
    <State/>
    <Lifecycle/>
    <Effect/>
    <Reducer/> */}
    {/* <State/> */}
    {/* <ContextHome/> */}
    {/* <Vote/> */}
      <Navs/>
        <Login  />
    </>
  );
}

export default App;

// props - properties

// function fname(x){  // parameter
//   let name = x
//   console.log(name);
// }
// fname("SATHIs") // argu

// state - 










