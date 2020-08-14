import React from 'react'
import { RecipesContext } from "../context/recipes";
import Loading from "../components/loading";

export default function Recipes() {
  const {recipes, loading} = React.useContext(RecipesContext);
  console.log(recipes, loading);
  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <h1>recipes</h1>
    )
  }
}
