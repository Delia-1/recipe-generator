
import PropTypes from "prop-types";

export default function Recipe({ recipeGenerated }) {
  return (
    <section>
      <h2>Recipe</h2>
      {recipeGenerated ? (
        <div>
          <h3>Generated Recipe:</h3>
          <p>{recipeGenerated}</p>
        </div>
      ) : (
        <p>Click Find recipe to generate a recipe based on your ingredients!</p>
      )}
    </section>
  );
}

Recipe.propTypes = {
  recipeGenerated: PropTypes.string.isRequired,
};
