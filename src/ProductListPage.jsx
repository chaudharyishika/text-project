import React,{useEffect, useState} from "react";
import alldata from "./DummyData";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import Product from "./Product";
import {BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {BiSearch } from "react-icons/bi";

function ProductListPage(){
  const [productlist,setproductlist] = useState([]);  
  const [query,setquery] = useState("");
  const [sort,newsort]= useState("default");
  const [data,newdata]= useState([]);
  const [getData,setgetData] = useState([]);
  useEffect(function(){
    const xyz = getProductList();
    xyz.then(function(response){
      setproductlist(response.data.products);
      newdata(response.data.products);
      setgetData(response.data.products);
    })
  },[]);
  function handleChange(event){
      const newquery = event.target.value ;
      const updatedata = getData.filter(function(item){
        return item.title.indexOf(newquery) != -1;
       })
  
       setquery(newquery);
       newdata(updatedata);
      //  console.log(newquery);
      //  console.log("update data", updatedata);
      }
      if(sort=="price"){
        data.sort(function(x,y){
          return x.price > y.price ? 1 : -1;
        });
    console.log("data is" , data);
  }else if(sort=="name"){
    data.sort(function(x,y){
    return x.title < y.title ? -1: 1
    });
  }
  function handleSortchange(event){
    newsort(event.target.value);
    console.log("newadataprice", newsort)
  }
  function handleQuerychange(event){
    setquery(event.target.value);
  }
  
   return(<div className="h-screeen w-screen">
     <div className="flex justify-between  bg-black" >
      <h1 className="text-white text-4xl ml-2 mt-2 ">EAZYMART</h1>
      <div className="flex mt-2 mb-2">
      <input className="h-12 w-96 border-1 rounded-l-md" placeholder="Search your item here" onChange={handleChange}/> 
      <Link>
        <BiSearch className=" bg-orange-400 h-12 w-10 rounded-r-md " />
      </Link> 
      </div>
      <div className="flex mt-2 mb-2 mr-2 space-x-2" >
      <select className="h-12 ml-4 pr-2 " value={sort} onChange={handleSortchange} >
        <option value="default">Default option</option>
        <option value="name">Sort by name</option>
        <option value="price" >Sort by price</option>
      </select>
      <Link>
        <BiCartAlt className="h-12 w-12 bg-white "/>
      </Link>
      </div>
      </div>  
      <div className=" bg-slate-600 justify-around  flex flex-wrap ">
      {data.map((item)=>{
        return(<div >
      <Product item={item} />
      </div>
        )
      })}
      </div>
    </div>);
}
export default ProductListPage;