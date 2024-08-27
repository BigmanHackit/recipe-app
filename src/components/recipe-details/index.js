import Link from "next/link"


const RecipeDetailsItem = ({ getRecipeDetails }) => {
  return (
    <div className="min-h-screen base-bg p-10">
      <Link href={'/recipe-list'} className="button">Back</Link>
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10 ">
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                    <img
                    src={getRecipeDetails.image}
                    alt={getRecipeDetails.name}
                    className="w-4/5 rounded object-cover"
                    />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-950">
                    {getRecipeDetails?.name}
                  </h2>
                  <div className="gap-4 mt-5">
                    <p className="text-2xl text-gray-700">
                      {getRecipeDetails?.mealType}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-xl text-gray-800">
                      {getRecipeDetails?.cuisine}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h3>Ingredients:</h3>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800 font-bold">
                      {
                        getRecipeDetails?.ingredients.map(item => <li>{item}</li>)
                      }
                    </ul>
                  </div>
                </div>
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-3">Instructions</h2>
              <p className="text-lg">
                {getRecipeDetails?.instructions}
              </p>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetailsItem