import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {name: "", cuisine: "", photo: "", ingredients: "", preparation:""}
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    createRecipe(formData)

    
    
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input onChange={handleChange} name="name" placeholder="Name"></input>
            </td>
            <td>
              <input onChange={handleChange} name="cuisine" placeholder="Cuisine"></input>
            </td>
            <td>
              <input onChange={handleChange} name="photo" placeholder="URL"></input>
            </td>
            <td>
              <textarea onChange={handleChange} name="ingredients" placeholder="Ingredients"></textarea> 
            </td>
            <td>
              <textarea onChange={handleChange} name="preparation" placeholder="Preparation"></textarea>
            </td>
            <td>
              <button onChange={handleChange} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
