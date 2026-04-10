import React, { use, useState } from "react";

import Tool from "./tool";
import SelectedTools from "./SelectedTools";
const Tools = ({dataPromise}) => {
     console.log(dataPromise);
     const data = use(dataPromise);
     console.log(data);
   
     const [selectedType,setSelectedType]=useState("products");
     console.log(selectedType,"selectedType");

 return (
        <div>
            
            <div className="center text-center">
                <h2>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
                 <button 
                 onClick={()=>setSelectedType("products")}
                 className={`btn ${selectedType==="products" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":"bg-red-500"} rounded-full`}>Products</button>
                  <button 
                  onClick={()=>setSelectedType("cart")}
                  className={`btn ${selectedType==="cart" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":"bg-red-500"} rounded-full`}>Cart (2)</button>
                 
            </div>

            
            {selectedType==="products" ?<Tool data={data}></Tool>:
            <SelectedTools></SelectedTools>}
        </div>
    );
};

export default Tools;