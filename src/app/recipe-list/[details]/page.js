import RecipeDetailsItem from "@/components/recipe-details";


async function fetchRecipeDetails(currentRecipeId) {
  try {

    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const result = await apiResponse.json()

    return result;

    
  } catch (error) {
     throw new Error(error)
  }
}

const RecipeDetails = async ({ params }) => {

  const getRecipeDetails = await fetchRecipeDetails(params?.details)

  return (
    <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
  )
}

export default RecipeDetails