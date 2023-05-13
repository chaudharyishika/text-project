import React from "react";
import {Link} from "react-router-dom";
import ProductDetails from "./ProductDetails";
function Product({category,title,price,imgUrl}){
    return(
     <div className="bg-red-600 ">
        <h1>{category}</h1>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <img src={imgUrl}/>
        <Link to="/products/1">View details</Link>
     </div>
    );
}
export default Product;