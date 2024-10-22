/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const RecipesCards = ({ addRecipeQueue }) => {
  const [recipesCard, setRecipesCard] = useState([]);

  useEffect(() => {
    fetch("../recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipesCard(data));
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 border-2 p-4 rounded-xl">
      {recipesCard.map((card, idx) => (
        <div key={idx} className="card bg-base-100  border-2">
          <figure className="p-4">
            <img src={card.image} alt="Shoes" className="rounded-xl w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">
              {card.recipe_name}
            </h2>
            <p>{card.short_description}</p>
            <h3 className="font-bold">
              Ingredients: {card.ingredients.length}
            </h3>
            <ul className="mb-5">
              {card.ingredients.map((items, idx) => (
                <li key={idx} className="list-disc ml-8">
                  {items}
                </li>
              ))}
            </ul>
            <div className="mb-5">
              <span>
                <i className="fa-regular fa-clock mr-2"></i>
                {card.preparing_time} minutes
              </span>
              <span className="ml-5">
                <i className="fa-solid fa-fire mr-2"></i>
                {card.calories} calories
              </span>
            </div>
            <div className="card-actions">
              <button
                onClick={() => addRecipeQueue(card)}
                className="btn text-lg font-semibold px-7  bg-[#0BE58A] rounded-full"
              >
                Want to cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesCards;
