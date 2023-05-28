import React,{useEffect, useState} from "react";
import alldata from "./DummyData";
import ProductList from "./ProductList";
import { getProductList } from "./api";

function ProductListPage(){
  const [productlist,setproductlist] = useState([]);  
  const [query,setquery] = useState("");
  const [sort,newsort]= useState("default");
  useEffect(function(){
    const xyz = getProductList();
    xyz.then(function(response){
      setproductlist(response.data.products);
    })
  },[]);
  const [data,newdata]= useState(productlist);
  function handleChange(event){
      const newquery = event.target.value ;
      const updatedata = data.filter(function(item){
        return item.title.indexOf(newquery) != -1;
       })
       console.log("new data", updatedata);
       setquery(newquery);
       newdata(updatedata);
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
  
    return(<div>
      <input placeholder="kyaaa" onChange={handleChange}/>  
      <select value={sort} onChange={handleSortchange} >
        <option value="default">Default option</option>
        <option value="name">Sort by name</option>
        <option value="price" >Sort by price</option>
      </select>
      <ProductList products={productlist} ></ProductList>
    </div>);
}
export default ProductListPage;