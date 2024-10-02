'use server'

import RecipeList from "@/components/recipe-list";



async function fetchListOfRecipes(){
    try{
        const apiResponse = await fetch("https://dummyjson.com/recipes")
        const data = await apiResponse.json();
        return data?.recipes;

    }catch(e){
        console.error("Failed to fetch data:", e);
    }
}

// async function fetchInstructions(){
//     try{
//         const apiResponse = await fetch("https://dummyjson.com/recipes")
//         const data = await apiResponse.json();
//         return data?.recipes;

//     }catch(e){
//         throw new Error(e) ;
//     }
// }


export default async function Recipes(){
    const recipeList = await fetchListOfRecipes();
    // const recipeId = await fetchInstructions();

    return (
    <RecipeList recipeList={recipeList} />
    // <InstructionDrawer recipeId={recipeId}/>
    
)
}