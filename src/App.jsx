import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import RecipesCards from "./components/RecipesCards";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipeQueue) =>
        previousRecipeQueue.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Already Added");
    }
  };

  const handleRemove = (id) => {
    //find which recipe remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    //remove from want to cook table
    const updateQueue = recipeQueue.filter((recipe) => recipe.recipe_id !== id);
    setRecipeQueue(updateQueue);
    setPrepareRecipe([...prepareRecipe, deletedRecipe]);
  };
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <section className=" mb-96 flex flex-col md:flex-row gap-7">
        {/* recipes card  */}
        <RecipesCards addRecipeQueue={addRecipeQueue}></RecipesCards>
        {/* sidebar */}
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          prepareRecipe={prepareRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </>
  );
}

export default App;
