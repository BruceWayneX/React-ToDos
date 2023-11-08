import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
<div className="loader">
    <div className="face">
        <div className="circle"></div>
    </div>
    <div className="face">
        <div className="circle"></div>
    </div>
</div>
  );
}



export { TodosLoading };
