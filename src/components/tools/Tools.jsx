import React, { use, useState } from "react";

import Tool from "./tool";
import SelectedTools from "./SelectedTools";
const Tools = ({dataPromise}) => {
     console.log(dataPromise);
     const data = use(dataPromise);
     console.log(data);
   
     const [selectedType,setSelectedType]=useState("products");
     console.log(selectedType,"selectedType");
    const [coin, setCoin] = useState(0);
    const [selectedProduct,setSelectedProduct]=useState([]);
 return (
        <div>
            
            <div className="center text-center">
                <h2 className="font-bold text-2xl">Premium Digital Tools</h2>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
                 <button 
                 onClick={()=>setSelectedType("products")}
                 className={`btn ${selectedType==="products" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":"btn"} rounded-full`}>Products</button>
                  <button 
                  onClick={()=>setSelectedType("cart")}
                  className={`btn ${selectedType==="cart" ?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA]":"btn"} rounded-full`}>Cart ({selectedProduct.length})</button>
                 
            </div>

            
            {selectedType==="products" ?<Tool data={data} setCoin={setCoin} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></Tool>:
            <SelectedTools 
            
            selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} coin={coin}></SelectedTools>}
        </div>
    );
};

export default Tools;