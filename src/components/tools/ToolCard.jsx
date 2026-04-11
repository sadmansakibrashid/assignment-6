import React, { useState } from "react";
import ToolFeature from "./ToolFeature";

const ToolCard = ({ tool, setCoin,selectedProduct,setSelectedProduct }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 w-96 shadow-sm relative">

      <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">
        {tool.tag}
      </span>

      <div className="w-12 h-12 mb-4">
        <img
          src={tool.icon}
          alt={tool.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>{tool.description}</p>

        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${tool.price}
          </span>
          <span className="text-gray-500 text-sm">/{tool.period}</span>
        </div>

        {tool.features.map((feature, index) => (
          <ToolFeature key={index} feature={feature} />
        ))}

        <button
          className="btn btn-primary w-full"
          onClick={() => {
             alert(`${tool.name} is selected`)
              setIsSelected(true);
              setSelectedProduct([...selectedProduct,tool])
              setCoin(prev => prev + tool.price);
            }
          }
          disabled={isSelected}
        >
          {isSelected ? "Added to cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;