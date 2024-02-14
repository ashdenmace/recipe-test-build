import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe,])
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const deleteRecipe = (deleteIndex) => setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== deleteIndex))
  
  const headerStyle = {
    fontSize: "64px",
    fontFamily:"Playfair Display SC",
    textAlign: "center"
  }


  return (
    <div className="App">
      <header><h1 style={headerStyle}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
