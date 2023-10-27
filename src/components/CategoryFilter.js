import React from "react";


//All", "Code", "Food", "Money", "Misc

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

 

 
    const onSelect = (e,category) => {
      
      setSelectedCategory(category)
      
    }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=>
      
      <button key={category} name={category} className= {selectedCategory===category? 'selected':''} onClick={(e)=>onSelect(e,category)}>{category}</button>
      )}     

      
      
    </div>
  );
      }

export default CategoryFilter;


