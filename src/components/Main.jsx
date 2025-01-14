import React from "react";
import Recipe from "./Recipe.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getRecipeFromChefClaude } from "./ai.js";

export default function Main() {
  const [list, setList] = React.useState(["Milk", "Butter", "Sugar"]);
  const [recipeGenerated, setRecipeGenerated] = React.useState("");

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    if (ingredient) {
      setList((prevList) => [...prevList, ingredient]);
    }
    event.currentTarget.reset();
  }

  const [hover, setHover] = React.useState(false);

  function handleCancelItem(item) {
    setList((prevList) => prevList.filter((element) => element !== item));
  }

  function toggleBounce(item) {
    setHover(item);
  }

  function removeBounce() {
    setHover(false);
  }

  async function toggleRecipe() {
    const recipe = await getRecipeFromChefClaude(list);
    setRecipeGenerated(recipe); // Update recipeGenerated state
  }

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

  const listPart =
    list.length !== 0 && (
      <section className="listPart">
        <h2 className="listPartText">Ingredients on hand:</h2>
        <ul className="listPartList">{ingredientsList}</ul>
      </section>
    );

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

      <section className="ingredients-section">
        {listPart}
        {list.length > 3 && (
          <button onClick={toggleRecipe} className="button-submit">
            Find recipe
          </button>
        )}
      </section>

      <Recipe list={list} recipeGenerated={recipeGenerated} />
    </>
  );
}
