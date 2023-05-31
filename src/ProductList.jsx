import React from "react";
import Product from "./Product";
function ProductList({products}){
    return(
        <div className="flex space-x-5 w-56 h-48 ">
      {products.map(function(item){
         return(
            <Product
       key={item.title}     
       title={item.title}
       category={item.category}
       price={item.price}
       thumbnail={item.thumbnail}
       />);
      })}
      
     </div>
    );
}
export default ProductList;