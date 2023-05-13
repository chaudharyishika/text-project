import React, {useState}  from 'react';
import {Routes,Route} from "react-router-dom";
import ProductList from "./ProductList";
import ProductListPage from './ProductListPage';
import ProductDetails from './ProductDetails';

function App() {
  const path = window.location.pathname;
  return(
    <div className='flex'>
      <Routes>
        <Route index element={<ProductListPage/>}></Route>
        <Route path='/products/1' element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;











