import { useState } from "react";
import categoriesData from "../categoriesData";
const QuickCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelected = (selected) => {
    setSelectedCategory(selected);
  };
  console.log(selectedCategory);

  return (
    <section>
      <ul className="flex space-x-8 m-6">
        {categoriesData.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleSelected(category.title)}>
              <p
                className={
                  selectedCategory === category.title
                    ? "bg-gray-900 text-200 py-2 px-4 rounded-lg hover:bg-gray-300 text-gray-200 font-semibold"
                    : "bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 font-semibold"
                }
              >
                {category.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickCategories;
