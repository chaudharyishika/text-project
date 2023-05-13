import React from "react";
import { BiArrowBack} from "react-icons/bi";
import { Link } from "react-router-dom";
function ProductDetails(){
    return(
        <div>
            <img src="https://images.unsplash.com/photo-1683514422430-ff8a2c779a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"/>
            <h1>photo of car</h1>
            <input className="border border-1" type="text" value={1}/>
            <button>Add to cart</button>
            <Link className="w-4" to="/">
            <BiArrowBack/>
            </Link>
        </div>
    )
}
export default ProductDetails;