import React from "react";
import Recipe from "./Recipe.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getRecipeFromChefClaude } from "./ai.js";

export default function Main() {
  const [list, setList] = React.useState(["Milk", "Butter", "Sugar"]);
  const [recipe, setRecipe] = React.useState("");
  const [hover, setHover] = React.useState(false);


  // handle the form submission and add an ingredient to the list
  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    if (ingredient) {
      setList((prevList) => [...prevList, ingredient]);
    }
    event.currentTarget.reset();
  }

  // handle the removal of an ingredient from the list
  function handleCancelItem(item) {
    setList((prevList) => prevList.filter((element) => element !== item));
  }

  // function to handle the bounce effect when hovering over the trash icon
  function toggleBounce(item) {
    setHover(item);
  }

  function removeBounce() {
    setHover(false);
  }

  // async function to call the AI function to get a recipe from the list of ingredients
  async function toggleRecipe() {
    try {
      const recipe = await getRecipeFromChefClaude(list);
      console.log("Recipe fetched:", recipe);
      setRecipe(recipe); // Update recipeGenerated state
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  // map the list of ingredients to a list of JSX elements
  const ingredientsList = list.map((item, index) => (
    <div className="div-list-cancel" key={index}>
      <li className="listPartItem">{item}</li>
      <FontAwesomeIcon
        onClick={() => handleCancelItem(item)}
        onMouseEnter={() => toggleBounce(item)}
        onMouseLeave={removeBounce}
        icon={faTrashCan}
        bounce={hover === item}
      />
    </div>
  ));



  return (
    <>
      <form onSubmit={addIngredient}>
        <input
          className="ingredients-input"
          type="text"
          placeholder="e.g. Eggs"
          name="ingredient"
        />
        <input
          className="button-submit"
          type="submit"
          value="+ Add ingredient"
        />
      </form>

      {ingredientsList.length !== 0 &&  (
        <section className="ingredients-section">
               {ingredientsList.length < 4 &&
          <p>* Please add at least 4 ingredients 🍎</p> }
                <section className="listPart">
        <h2 className="listPartText">Ingredients on hand:</h2>
        <ul className="listPartList">{ingredientsList}</ul>
          {list.length > 3 && (
            <button onClick={toggleRecipe} className="button-submit">
              Find recipe
            </button>
          )}
      </section>
      </section>)}

      {recipe && <Recipe  recipe={recipe} />}

    </>
  );
}
