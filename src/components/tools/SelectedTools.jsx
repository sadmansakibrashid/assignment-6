import React from 'react';

const SelectedTools = ({ coin, selectedProduct,setSelectedProduct}) => {

const handleDelete=(product)=>{
  console.log(product,"product");
  const filterProduct = selectedProduct.filter(chosenProduct=>chosenProduct.name!==product.name);
  setSelectedProduct(filterProduct);
};

  return (
    <div className='px-20 rounded'>
    <div className='px-20 rounded shadow-2xl'>
      
      <h2 className='font-semibold'>Your Cart Total: ${coin}</h2>

      {
        selectedProduct.map((product, ind) => (
          <div key={ind} className="p-3 m-2 flex justify-between gap-2">
            <div>
            <div><img src={product.icon} alt={product.name} /></div>
           <div>
             <p>{product.name}</p>
            <p>${product.price}</p>
           </div>
           </div>
           <div><button className='btn' onClick={()=>handleDelete(product)}>Remove</button></div>
          </div>
          
        ))
      }
      <div className='flex justify-between'>
        <p>Total:</p> 
        <h3 className='font-bold'>${coin}</h3>
        </div>
        <button className='btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
    </div>
    </div>
  );
};

export default SelectedTools