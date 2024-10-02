'use server'

import { InstructionDrawer } from "@/components/drawer-demo/page";
import RecipeList from "@/components/recipe-list";
import { error } from "console";


async function fetchListOfRecipes(){
    try{
        const apiResponse = await fetch("https://dummyjson.com/recipes")
        const data = await apiResponse.json();
        return data?.recipes;

    }catch(e){
        throw new Error() ;
    }
}

async function fetchInstructions(){
    try{
        const apiResponse = await fetch("https://dummyjson.com/recipes")
        const data = await apiResponse.json();
        return data?.recipes;

    }catch(e){
        throw new Error() ;
    }
}


export default async function Recipes(){
    const recipeList = await fetchListOfRecipes();
    // const recipeId = await fetchInstructions();

    return (
    <RecipeList recipeList={recipeList} />
    // <InstructionDrawer recipeId={recipeId}/>
    
)
}