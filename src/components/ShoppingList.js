import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelected] = useState("All")

function handleChange(event){
  setSelected(event.target.value);
}

// console.log(selectedCategory);
// console.log(items[0])
const filteredItems = items.filter(item => {
  if (selectedCategory==="All") return true;
  else return (item.category === selectedCategory);
})

// console.log (filteredItems);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
