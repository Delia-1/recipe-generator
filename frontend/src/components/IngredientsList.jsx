// import React from "react"
// import PropTypes from "prop-types"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { getRecipeFromChefClaude} from "./ai.js"
// import Recipe from "./Recipe.jsx";

// export default function IngredientsList({setList, list }) {

//   const [hover, setHover] = React.useState(false)

//   function handleCancelItem(item) {
//     setList( prevList => prevList.filter( element => element !== item))
//    }

//    function toggleBounce(item) {
//     setHover(item)
//    }
//    function removeBounce() {
//     setHover(false); // Reset hover state when leaving
//   }

//   async function toggleRecipe() {
//     const recipeGenerated = await getRecipeFromChefClaude(list)
//     console.log(recipeGenerated)
//   }


//   const ingredientsList = list.map((item, index) =>
//     (<div className="div-list-cancel" key={index}>
//       <li className="listPartItem"> {item} </li>
//       <FontAwesomeIcon
//         onClick={() => handleCancelItem(item)}
//         onMouseEnter={()=> toggleBounce(item)}
//         onMouseLeave={removeBounce}
//         icon={faTrashCan}
//         bounce={hover === item}
//       />
//     </div>))

//     IngredientsList.propTypes = {
//       list: PropTypes.arrayOf(PropTypes.string).isRequired,
//       setList:PropTypes.func.isRequired,
//     }

//   const listPart =  list.length !== 0 &&  <section className="listPart">
//     <h2 className="listPartText">Ingredients on hand :</h2>
//        <ul className="listPartList">
//         {ingredientsList}
//       </ul>
//     </section>



// return (
//   <section className="ingredients-section">
//       <Recipe list={list} toggleRecipe={toggleRecipe}/>
//       {listPart}
//       {list.length > 3 &&
//         <button onClick={toggleRecipe}className="button-submit">Find recipe</button>}
//     </section>
// )
// }
