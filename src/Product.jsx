import React from "react";
import {Link} from "react-router-dom";
import ProductDetails from "./ProductDetails";
function Product({item}){
    return(
     <div className="m-4 bg-slate-400 pb-4 h-80 w-80 rounded-md space-y-2 pl-4 text-xl">
        <h1 >{item.category}</h1>
        <h2>{item.title}</h2>
        <h3>Rs.{item.price}</h3>
        <img className=" h-36 w-36 " src={item.thumbnail}/>
        <Link to="/products/1">VIEW DETAILS</Link>
     </div>
    );
}
export default Product;