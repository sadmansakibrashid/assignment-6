import React, { use } from "react";

const Tools = ({dataPromise}) => {
     console.log(dataPromise);
     const data = use(dataPromise);
     console.log(data);
    
    
    return (
        <div>
            <h3>{data.length}</h3>
        </div>
    );
};

export default Tools;