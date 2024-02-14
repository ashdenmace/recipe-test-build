import React from "react"
function RecipeView ({recipe, deleteRecipe}) {
    const picStyle = {
        objectFit: "scale-down",
        width: "100%",
        height: "100%"
    }
    return (
        <tr>
            <td name="name">{recipe.name}</td>
            <td name="cuisine">{recipe.cuisine}</td>
            <td name="picture"><img style={picStyle} src={recipe.photo} alt="User uploaded"/></td>
            <td name="ingredients" className="content_td"><p>{recipe.ingredients}</p></td>
            <td name="preparation" className="content_td"><p>{recipe.preparation}</p></td>
            <td>
                <button name="delete" onClick={deleteRecipe}>Delete

                </button>
            </td>
            
        </tr>
        
    )
}

export default RecipeView;