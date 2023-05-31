import React from "react";
import { BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";
function ProductDetails(){
    return(
        <div>
    
            <h1>HERE YOU KNOW MORE</h1>
            <input className="border border-2 p-2 rounded-md" type="text" placeholder="Write your query"/>
            <button className=" bg-orange-400 p-2 rounded-md ">Add to cart</button>
            <Link to="/">
            <BiArrowBack className="w-12 h-12"/>
            </Link>
        </div>
    )
}
export default ProductDetails;