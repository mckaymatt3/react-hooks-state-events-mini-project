import React from "react";
import {v4 as uuid} from 'uuid';


function CategoryFilter({categories, selectedCategory, onSelectCategory}) {  
  console.log("Categories:", categories)

  const createButton = categories.map(function (category){
    console.log("Category:", category)
    console.log("Selected Category:", selectedCategory)
    const className = category === selectedCategory ? "selected" : null
    return <button 
              key={uuid} 
              className={className}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5> 
      {
        createButton
      }
      </div>     
  );
}

export default CategoryFilter;
