import React from 'react';
import "../style/Recipe.css"
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";



export default function Recipe(props) {

  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h1>Cheffe Délia recommends:</h1>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.string.isRequired,
};
