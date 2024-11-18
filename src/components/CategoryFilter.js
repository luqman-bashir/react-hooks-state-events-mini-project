import React from "react";

function CategoryFilter({ selectedCategory, onCategoryClick }) {
  const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
