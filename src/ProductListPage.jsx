import React,{useState} from "react";
import alldata from "./DummyData";
import ProductList from "./ProductList";

function ProductListPage(){
    
 const [query,setquery] = useState("");
  const [data,newdata]= useState(alldata);
  const [sort,newsort]= useState("default");
  function handleChange(event){
      const newquery = event.target.value ;
      const updatedata = alldata.filter(function(item){
        return item.title.indexOf(newquery) != -1;
       })
       console.log("new data", alldata);
       setquery(newquery);
       newdata(updatedata);
  }
  if(sort=="price"){
    alldata.sort(function(x,y){
      return x.price - y.price;
    });
  }else if(sort=="name"){
    alldata.sort(function(x,y){
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
      <ProductList products={data} ></ProductList>
    </div>);
}
export default ProductListPage;