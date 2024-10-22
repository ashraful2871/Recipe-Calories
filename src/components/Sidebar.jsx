/* eslint-disable react/prop-types */
const Sidebar = ({
  recipeQueue,
  handleRemove,
  prepareRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-1/3 border-2 rounded-2xl p-2">
      <h2 className="text-center font-semibold text-2xl p-5 bg-base-100">
        {" "}
        Want To Cook: {recipeQueue.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-medium text-base">Name</th>
              <th className="font-medium text-base">Time</th>
              <th className="font-medium text-base">Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn rounded-full font-semibold px-5 bg-[#0BE58A]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  currently cook table */}

      <div className="overflow-x-auto mt-8">
        <h2 className="text-center font-semibold text-2xl p-5 bg-base-100">
          {" "}
          Currently Cooking: {prepareRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-none">
              <th></th>
              <th className="font-medium text-base">Name</th>
              <th className="font-medium text-base">Time</th>
              <th className="font-medium text-base">Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {prepareRecipe.map((recipe, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <th></th>
              <td>Total Time = {totalTime}</td>
              <td>Total calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
