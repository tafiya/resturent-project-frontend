"use client";
import useCategories from "@/hook/useCategories";
import useFoods from "@/hook/useFoods";
import { useState } from "react";
import AddFoodModal from "./modal/AddFoodModal";
import AddCategoryModal from "./modal/AddCategoryModal";


const FoodTabs = () => {
  const { foods, loading: foodLoading } = useFoods();
  const { categories, loading: catLoading } = useCategories();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  if (foodLoading || catLoading) return <p>Loading...</p>;
  console.log(foods)
console.log(categories);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16  max-w-[852px] mx-auto">
        <h2 className="lg:text-[55px] md:text-[45px] text-[30px] text-[#1F1F1F] font-bold">
          Our best Seller Dishes
        </h2>
        <p className="text-[#5C5C5C] lg:text-2xl md:text-xl text-base text-center font-normal mt-2">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center gap-3  mb-8">
        <div className=" flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveCategory("All")}
            className={`lg:px-[30px] md:px-[15px] px-[8px] py-2 md:py-1 lg:py-[15px] 
                lg:rounded-[45px] md:rounded-[23px] rounded-[12px] lg:text-2xl md:text-base text-xs border ${
                  activeCategory === "All"
                    ? "bg-black text-white"
                    : "text-black"
                }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategory(cat.name)}
              className={`lg:px-[30px] md:px-[15px] px-[8px] py-2 md:py-1 lg:py-[15px] 
                lg:rounded-[45px] md:rounded-[23px] rounded-[12px] lg:text-2xl md:text-base text-xs border ${
                  activeCategory === cat.name
                    ? "bg-black text-white"
                    : "text-black"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className=" flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="lg:px-[30px] md:px-[15px] px-[8px] py-2 md:py-1 lg:py-[15px] 
                lg:rounded-[45px] md:rounded-[23px] rounded-[12px] lg:text-2xl md:text-base text-xs border bg-black text-white"
          >
            Add Food
          </button>
          <button
            onClick={() => setIsCategoryOpen(true)}
            className="lg:px-[30px] md:px-[15px] px-[12px] py-2 md:py-1 lg:py-[15px] 
                lg:rounded-[45px] md:rounded-[23px] rounded-[12px] lg:text-2xl md:text-base text-xs border bg-black text-white"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredFoods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-b-lg overflow-hidden shadow-sm max-h-[488px]"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full lg:h-72 md:h-56 h-36 object-center"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-medium md:text-xl text-sm lg:text-3xl">
                  {food.name}
                </h3>
                <span className="md:text-xl text-base px-4 py-1.5 font-medium bg-[#F03328] text-white md:px-6 md:py-2.5 rounded-full">
                  {food.category}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[#FF9E0C] lg:text-2xl md:text-xl text-lg">
                  ★★★★★
                </span>
                <p className="font-semibold lg:text-[34px] md:text-xl text-lg mt-2">
                  ${230}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add Food Modal */}
      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AddCategoryModal
        isOpen={isCategoryOpen}
        onClose={() => setIsCategoryOpen(false)}
      ></AddCategoryModal>
    </div>
  );
};

export default FoodTabs;
